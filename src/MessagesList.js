import React, { Component } from 'react';
import * as firebase from 'firebase';
import MessageItem from './MessageItem';

//Componente para crear la estructura de la lista
class MessagesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Messages: []
        }
    }

    componentDidMount() {
        let t = this
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
            <div>
                <ul>
                    {
                        this.state.Messages.map((message) => (
                            <MessageItem message={message} />
                        ))
                    }
                </ul>
            </div>
        )
    }
}

export default MessagesList;