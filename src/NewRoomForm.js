import React from 'react'

class NewRoomForm extends React.Component {

    constructor() {
        super();
        this.state = {
            room: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    handleChange (event) {
        this.setState({
            room : event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        this.props.createRoom(this.state.room)
        this.setState({
            room : ''
        })
    }

    render () {
        return (
            <div className="new-room-form">
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        onChange = {this.handleChange}
                        value={this.state.room} 
                        placeholder="Create New Room" 
                        required />
                    <button id="create-room-btn" type="submit">+</button>
                </form>
            </div>
        )
    }
}

export default NewRoomForm