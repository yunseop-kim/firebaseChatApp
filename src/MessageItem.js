import React, { Component } from 'react';
import { ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import { darkBlack } from 'material-ui/styles/colors';
import { animateScroll } from 'react-scroll';

class MessageItem extends Component {
    render() {
        animateScroll.scrollToBottom();
        return (
            <ListItem
                leftAvatar={<Avatar src="https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/photo.jpg" />}
                primaryText={this.props.message.message}
                secondaryText={
                    <p>
                        <span style={{ color: darkBlack }}>{this.props.message.email}</span>-
                        {this.props.message.sendtime}
                    </p>
                }
            />
        )
    }
}

export default MessageItem;