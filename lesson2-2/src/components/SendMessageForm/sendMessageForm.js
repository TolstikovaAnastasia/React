import React from 'react';
import ReactDOM from 'react-dom';
import './sendMessageForm.css';

export class SendMessageForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange = (event) => {
        this.setState({message: event.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.sendMessage(this.state.message)
        this.setState({
            message: ''
        })
    }

    render(){
        return (
            <div className="sendMessageForm">
                <form>
                    <input className="messageForm"
                        type="text" 
                        value={this.state.message} 
                        onChange={this.handleChange} 
                        placeholder="Type message to send" />
                    <button className="buttonForm"
                        type="submit" 
                        onClick={this.handleSubmit}>
                        Send
                    </button>
                </form>
            </div>
        )
    }
}

ReactDOM.render(
    <SendMessageForm />,
    document.getElementById('root')
);