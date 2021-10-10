import React from 'react';
import ReactDOM from 'react-dom';
import { Button, TextField } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

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
                    <TextField id="outlined-basic" variant="outlined" autoFocus
                        className="messageForm"
                        type="text"
                        value={this.state.message} 
                        onChange={this.handleChange} 
                        placeholder="Type message to send"
                        size="small"/>
                    <Button variant="contained" endIcon={<SendIcon />} className="buttonForm"
                        type="submit" 
                        onClick={this.handleSubmit}
                        size="medium">
                        Send
                    </Button>
                </form>
            </div>
        )
    }
}

ReactDOM.render(
    <SendMessageForm />,
    document.getElementById('root')
);