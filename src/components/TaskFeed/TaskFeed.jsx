import React, { Component } from 'react'
import { Feed, Label, Icon } from 'semantic-ui-react';
import './TaskFeed.css';
//import CardActionHeader from '../CardActionHeader/CardActionHeader';
//TODO: add alias, something like Feed.Task
class TaskFeed extends Component {
  render() {
    const { title } = this.props;
    const date = '3 days ago';
    const summary = 'You added Jenny Hess to your coworker group.';
    const labelLetter = summary.charAt(0).toUpperCase();

    return (
      <Feed>
        <Feed.Event>
          <Feed.Label className='task-feed__task-label'>
            <Label circular color='teal' size='large'>{labelLetter}</Label>
          </Feed.Label>
          <Feed.Content>
            <Feed.Summary content={summary} />

            <Feed.Extra>
              <Feed.Date>
                <Icon name='time' /> {date}
              </Feed.Date>
            </Feed.Extra>
          </Feed.Content>

          <Feed.Label icon='ellipsis vertical' className='task-feed__task-label' />
        </Feed.Event>
      </Feed>
    )
  }
}

export default TaskFeed