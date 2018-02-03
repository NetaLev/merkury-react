import React, { Component } from 'react'
import { Comment, Icon } from 'semantic-ui-react';
import './MessageFeed.css';
//import CardActionHeader from '../CardActionHeader/CardActionHeader';
//TODO: add alias, something like Feed.Task
class MessageFeed extends Component {
  render() {
    const date = '3 days ago';
    const summary = 'You added Jenny Hess to your coworker group.';

    return (
      <Comment.Group size='large'>
        <Comment>
          <Comment.Avatar src='/assets/images/avatar/small/matt.jpg' />
          <Comment.Content>
            <Comment.Author as='a'>Matt</Comment.Author>
            <Comment.Metadata>
              <div>{date}</div>
            </Comment.Metadata>
            <Comment.Text> {summary}</Comment.Text>
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