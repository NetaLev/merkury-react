import React, { Component } from 'react'
import { Comment, CommentGroup } from 'semantic-ui-react';

import './FeedList.css';

import ActivityFeed from '../ActivityFeed/ActivityFeed';
import MessageFeed from '../MessageFeed/MessageFeed';
import TaskFeed from '../TaskFeed/TaskFeed';

class FeedList extends Component {

  render() {
    //console.log('@@@ FEED LIST PROPS @@@');
    //console.log(this.props);

    const { data, type } = this.props;
    const ComponentTag = type;

    return (
      <React.Fragment> {/* TODO: check why babel version does not support the new <></> fragment syntax */}
          {data.map((feedData, index) =>
            <ComponentTag {...feedData} /> //INFO: unique keys are passed from data
          )}
      </React.Fragment>
    )
  }
}

export default FeedList


/*

const Page = (props) => {
  const Handler = PAGES[props.page] || FourOhFourPage;

  return <Handler {...props} />
};

const tasksProps = pageHomeData.tasks;
'tasks': {
  'activeCount': faker.random.number({ min: 1, max: 9 }),
    'data': tasks
  const tasks = _.times(3, () => ({
    title: faker.lorem.sentence(),
    date: getRandomDate('left')
  }));
}
tasksProps['wrapItem'] = true;
tasksProps['type'] = TaskFeed.constructor.name;

'messages': {
  'activeCount': faker.random.number({ min: 1, max: 9 }),
    'data': messages
  const messages = _.times(3, () => ({
    sender: {
      name: faker.name.findName(),
      avatar: faker.image.avatar()
    },
    message: faker.lorem.sentence(),
    date: getRandomDate('ago')
  }))
}
const messagesProps = pageHomeData.messages;
messagesProps['wrapItem'] = true;
messageProps['type'] = TaskFeed.constructor.name;

'activities': {
  'activeCount': faker.random.number({ min: 1, max: 9 }),
    'data': activities
  const activities = _.times(4, () => ({
    user: {
      name: faker.name.findName(),
      avatar: faker.image.avatar()
    },
    subject: faker.random.arrayElement([activitySubjectType.PROJECT, activitySubjectType.TASK]),
    action: faker.random.arrayElement([activityActionType.ADD, activityActionType.COMMENT, activityActionType.COMPLETE]),
    date: getRandomDate('ago')
  }))
}
const activitiesProps = pageHomeData.activities;
activitiesProps['wrapItem'] = false;
activitiesProps['type'] = TaskFeed.constructor.name;

*/






