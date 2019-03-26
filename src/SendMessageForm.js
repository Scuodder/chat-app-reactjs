import React from 'react' ;


class SendMessageForm extends React.Component {

    constructor() {
        super() 
        this.state = {
            message : ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.submitHandler = this.submitHandler.bind(this) 
    }

    handleChange(event) {
       
        this.setState({
            message : event.target.value
        })
    }

    submitHandler(event) {
        event.preventDefault()
        // console.log(this.state.message) 
        this.props.sendMessage(this.state.message) 
        this.setState({
            message: ''
        })
    }

    render() {     
        // console.log(this.state.message)
        return (
       
            <form 
                onSubmit = {this.submitHandler}
                className="send-message-form">
                    <input 
                        disabled={this.props.disabled}
                        type="text"
                        placeholder="Type your message and hit enter"  
                        onChange = {this.handleChange}
                        value ={this.state.message}
                    /> 
            </form>
        )
    }

}

export default SendMessageForm ; 