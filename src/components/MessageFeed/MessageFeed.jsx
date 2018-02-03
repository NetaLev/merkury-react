import React, { Component } from 'react'
import { Comment, Icon } from 'semantic-ui-react';
import './MessageFeed.css';

class MessageFeed extends Component {
  render() {
    const { date, message, sender } = this.props;

    return (
      <Comment.Group>
        <Comment>
          <Comment.Avatar src={sender.avatar} />
          <Comment.Content>
            <Comment.Author as='a'>{sender.name}</Comment.Author>
            <Comment.Metadata>
              <div>{date}</div>
            </Comment.Metadata>
            <Comment.Text> {message}</Comment.Text>
            <Comment.Actions>
              <Comment.Action>
                <Icon name='reply' />
              </Comment.Action>
              <Comment.Action>
                <Icon name='setting' />
              </Comment.Action>
            </Comment.Actions>
          </Comment.Content>
        </Comment>
      </Comment.Group>
    )
  }
}

export default MessageFeed