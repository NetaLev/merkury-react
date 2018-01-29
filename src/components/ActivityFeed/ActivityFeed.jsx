import React, { Component } from 'react'
import { Feed, Comment, Icon } from 'semantic-ui-react';
import './ActivityFeed.css';
//import CardActionHeader from '../CardActionHeader/CardActionHeader';
//TODO: add alias, something like Feed.Task
class ActivityFeed extends Component {
  render() {
    const { title } = this.props;
    const date = '3 days ago';
    const summary = 'You added Jenny Hess to your coworker group.';
    const labelLetter = summary.charAt(0).toUpperCase();

    return (
      <Comment.Group size='small'>
        <Comment>
          <Comment.Avatar src='/assets/images/avatar/small/matt.jpg' />
          <Comment.Content>
            <Feed>
              <Feed.Event>
                <Feed.Content>
                  <Feed.Summary>
                    Justen Kitsune added 2 new photos
                  </Feed.Summary>
                  <Feed.Extra>
                    <Feed.Date>
                      <Icon name='time' /> {date}
                    </Feed.Date>
                  </Feed.Extra>
                </Feed.Content>
              </Feed.Event>
            </Feed>
          </Comment.Content>
        </Comment>
      </Comment.Group>
    )
  }
}

export default ActivityFeed