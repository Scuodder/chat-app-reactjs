import React from 'react';
import Chatkit from '@pusher/chatkit-client'; 
import { tokenUrl, instanceLocator } from './config.js' ;
import MessageList from './MessageList.js'
import NewRoomForm from './NewRoomForm.js'
import RoomList from './RoomList.js'
import SendMessageForm from './SendMessageForm.js'
import './App.css';

class App extends React.Component{

  constructor() {
    super()
    this.state = {
      messages: [] ,
      joinableRooms : [],
      joinedRooms : [] ,
      roomId : null
    }
    this.sendMessage = this.sendMessage.bind(this) 
    this.subscribeToRoom = this.subscribeToRoom.bind(this) 
    this.getRooms = this.getRooms.bind(this)
    this.createRoom = this.createRoom.bind(this)
  }

  componentDidMount() {
      const chatManager = new Chatkit.ChatManager({
          instanceLocator, 
          userId: "Sudarshan",
          tokenProvider: new Chatkit.TokenProvider({
              url: tokenUrl 
          }) 
      }) 

      chatManager.connect()
          .then((currentUser) => {
              this.currentUser = currentUser 
              this.getRooms()
                        
          })
          .catch((err) => {
            console.log(err) ;
          })

 

  }

  sendMessage(text) {

    this.currentUser.sendMessage({
      text : text , 
      roomId: this.state.roomId 
    }) 
  }         
  
  getRooms() {
    this.currentUser.getJoinableRooms()
      .then( joinableRooms => {
        this.setState({
          joinableRooms : joinableRooms ,
          joinedRooms : this.currentUser.rooms
        })
      })
      .catch(err => {console.log(err)})
  }

  subscribeToRoom(roomId) {
    this.setState({messages : []})
    this.currentUser.subscribeToRoom({
      roomId: roomId,
      hooks: {
          onMessage: (message) => {
              // console.log('message.text ', message.text) 
              this.setState({
                messages: [...this.state.messages, message]  
              })
          }
      } 
  })
    .then(room => {
      this.getRooms()
      this.setState({
        roomId : room.id 
      })
    })
    .catch(err => {console.log("error on subscribing to a room", err)}) 
  }

  createRoom(roomName) {
    this.currentUser.createRoom({
      name : roomName, 
    })
      .then((room) => {
          this.subscribeToRoom(room.id)
      })
      .catch( (err) => { console.log("error while creating new room", err) } )
  }

  render() {

      return (
          <div className ="app">
            <NewRoomForm createRoom = {this.createRoom}/>
            <SendMessageForm 
              disabled={!this.state.roomId}
              sendMessage= {this.sendMessage} />
            <MessageList 
              roomId = {this.state.roomId}
              messages = { this.state.messages }/>
            <RoomList
              roomId = {this.state.roomId}
              subscribeToRoom = {this.subscribeToRoom} 
              rooms = {[...this.state.joinableRooms, ...this.state.joinedRooms]}
            />
          </div>
      )
  }
}

export default App;
