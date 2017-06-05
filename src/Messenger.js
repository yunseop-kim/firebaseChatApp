import React, { Component } from 'react';
import MessagesList from './MessagesList';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import * as firebase from 'firebase';

class Messenger extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    formatDate(date) {
        var year = date.getFullYear();
        var month = date.getMonth();
        var day = date.getDate();
        var hour = date.getHours();
        var minute = date.getMinutes();
        var second = date.getSeconds();

        return year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        firebase.database().ref('Messages').push({
            uid: firebase.auth().currentUser.uid,
            message: this.state.value,
            sendtime: this.formatDate(new Date())
        });
        this.setState({ value: '' });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <MessagesList />
                <br />
                <br />
                <div style={{position: "fixed", bottom:"0", textAlign:"center", width:"100%", zIndex:"100"}}>
                    <TextField value={this.state.value} onChange={this.handleChange} style={{width:"70%"}} />
                    <RaisedButton type="submit" label="Send" primary={true} />
                </div>
            </form>
        );
    }
}

export default Messenger;