import React from 'react' ; 

class LoginForm extends React.Component {
    constructor() {
        super()
        this.state = {
            input : ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({
            input : event.target.value 
        })
    }

    handleSubmit() {
        this.props.login(this.state.input)
        this.setState({input : ''})
    }

    render () {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text"
                        value={this.state.input}
                        placeholder = "Enter Login username and hit Enter"
                        onChange = {this.handleChange}
                    >
                    </input>
                </form>
            </div>

        )
    }

}

export default LoginForm ;