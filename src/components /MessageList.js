import React from 'react' ;
import Message from './Message.js'


class MessageList extends React.Component {
    render() {
        return (
            <div className="message-list">
                {
                    this.props.messages.map( (element, index) => {
                        return (
                            <Message key = {index} username={element.senderId} text = {element.text} />
                        )
                    })
                }
            </div>
        )
    }
}


export default MessageList