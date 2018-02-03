import React, { Component } from 'react'
import { Feed, Label, Icon } from 'semantic-ui-react';
import './TaskFeed.css';

class TaskFeed extends Component { //TODO: add alias, something like Feed.Task
  render() {
    const { date, title } = this.props;
    const labelLetter = title.charAt(0).toUpperCase();

    return (
      <Feed>
        <Feed.Event>
          <Feed.Label className='task-feed__task-label'>
            <Label circular color='teal' size='large'>{labelLetter}</Label>
          </Feed.Label>
          <Feed.Content>
            <Feed.Summary content={title} />

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