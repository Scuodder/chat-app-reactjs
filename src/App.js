import React from 'react';
import Chatkit from '@pusher/chatkit-client'; 
import { tokenUrl, instanceLocator } from './config.js' ;
import MessageList from './components/MessageList.js'
import './App.css';

class App extends React.Component{

  constructor() {
    super()
    this.state = {
      messages: [] 
    }
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
              currentUser.subscribeToRoom({
                  roomId: "19389849",
                  hooks: {
                      onMessage: (message) => {
                          console.log('message.text ', message.text) 
                          this.setState({
                            messages: [...this.state.messages, message]  
                          })
                      }
                  } 
              })
          })
          .catch((err) => {
            console.log(err) ;
          })



  }

  render() {
      console.log(this.state.messages)
      return (
          <div className ="app">
            <MessageList messages = { this.state.messages }/>
          </div>
      )
  }
}

export default App;
