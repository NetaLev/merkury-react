import React, { Component } from 'react'
import { Feed, Comment, Icon } from 'semantic-ui-react';
import './ActivityFeed.css';
//import CardActionHeader from '../CardActionHeader/CardActionHeader';
//TODO: add alias, something like Feed.Task
class ActivityFeed extends Component {
  render() {
    const { action, date, subject, user } = this.props;
console.log('USER');
console.log(user);

    const summary = 'You added Jenny Hess to your coworker group.';
    const labelLetter = summary.charAt(0).toUpperCase();

    return (
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
    )
  }
}

export default ActivityFeed