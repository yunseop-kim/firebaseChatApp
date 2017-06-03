import React, { Component } from 'react';

class MessageItem extends Component {
    render() {
        return (
            <li>
                <span>{this.props.message.username}:{this.props.message.message}-{this.props.message.sendtime}</span>
            </li>
        )
    }
}

export default MessageItem;