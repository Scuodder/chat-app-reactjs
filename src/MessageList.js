import React from 'react'
import Message from './Message.js'

class MessageList extends React.Component {
    render() {
        if (!this.props.roomId) {
            return (
               <div className="message-list">
                    <div className="join-room">
                       Join any room &rarr; 
                    </div>
               </div> 
            )
            

        }

        return (
            <div className="message-list">
                {this.props.messages.map((element, index) => {
                    return (
                        <Message key={index} username={element.senderId} text={element.text} />
                    )
                })}
            </div>
        )
    }
}

export default MessageList