import React, { Component } from 'react';
import { ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import { darkBlack } from 'material-ui/styles/colors';
import { animateScroll } from 'react-scroll';
import * as firebase from 'firebase';

class MessageItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            userInfo: {
                email: "me@example.com",
                photo: "./logo.svg",
                username: "myname"
            }
        }
    }

    componentDidMount() {
        let t = this;
        firebase.database().ref('/User/' + this.props.message.uid).once('value').then(function (userInfo) {
            t.setState({userInfo: userInfo.val()})
        });
    }

    render() {
        animateScroll.scrollToBottom();
        return (
            <ListItem
                leftAvatar={<Avatar src={this.state.userInfo.photo} />}
                primaryText={this.props.message.message}
                secondaryText={
                    <p>
                        <span style={{ color: darkBlack }}>{this.state.userInfo.username}</span>-
                        {this.props.message.sendtime}
                    </p>
                }
            />
        )
    }
}

export default MessageItem;