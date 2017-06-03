import React, { Component } from 'react';
import MessagesList from './MessagesList';
import * as firebase from 'firebase';

class Messenger extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
        this.count = 0;
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
            username: this.props.user.displayName,
            message: this.state.value,
            sendtime: this.formatDate(new Date())
        });
        this.setState({ value: '' });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <MessagesList />
                <label>
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }

    sendMessage(userId, name, email, imageUrl) {
        firebase.database().ref('Messages/' + userId).set({
            username: name,
            email: email,
            profile_picture: imageUrl
        });
    }
}

export default Messenger;