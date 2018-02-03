import React, { Component } from 'react'
import { Feed, Comment, Icon } from 'semantic-ui-react';
import './ActivityFeed.css';

//TODO: add alias, something like Feed.Task
class ActivityFeed extends Component {
  render() {
    const { action, date, subject, user } = this.props;

    return (
      <Comment.Group>
        <Comment>
          <Comment.Avatar src={user.avatar} />
          <Comment.Content>
            <Feed>
              <Feed.Event>
                <Feed.Content>
                  <Feed.Summary>
                    {`${user.name} ${action} ${subject}`}
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