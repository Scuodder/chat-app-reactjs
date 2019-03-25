import React from 'react' ;



class MessageList extends React.Component {
    render() {
        return (
            <div className="message-list">
                {
                    this.props.messages.map( (element, index) => {
                        return (
                            <div className="message" key={index}>
                                <div className="message-username">{element.senderId}</div>
                                <div className="message-text">{element.text}</div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}


export default MessageList