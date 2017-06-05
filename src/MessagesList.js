import React, { Component } from 'react';
import List from 'material-ui/List';
import * as firebase from 'firebase';
import MessageItem from './MessageItem';

class MessagesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Messages: []
        }
    }

    componentDidMount() {
        let t = this;
        var messagesRef = firebase.database().ref('Messages')
        messagesRef.on('value', function (snapshot) {
            let temp = []
            for (let doc in snapshot.val()) {
                temp.push(snapshot.val()[doc])
            }
            t.setState({ Messages: temp })
        });
    }

    render() {
        return (
            <List>
                {
                    this.state.Messages.map(message => <MessageItem message={message} />)
                }
            </List>
        )
    }
}

export default MessagesList;