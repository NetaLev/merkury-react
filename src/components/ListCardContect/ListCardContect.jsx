import React, { Component } from 'react'
import { Feed, List, Label, Card, Image, Grid } from 'semantic-ui-react';
import './ListCardContect.css';
import TaskFeed from '../TaskFeed/TaskFeed';
import MessageFeed from '../MessageFeed/MessageFeed';
import ActivityFeed from '../ActivityFeed/ActivityFeed';
// TODO: refactor: rename for something like 'SelectionCard'

class ListCardContect extends Component {

 /* { listCardContent(tasksProps) } 
 { listCardContent(messagesProps) }
 { listCardContent(activitiesProps) }
 */

wrap = (component) => <Card.Content>{component}</Card.Content>;

  //Item = (props) => <Card.Content>{props.message}</Card.Content>;

  listCardContent = (props) => {
    return (
      <div>
        {props.map((message) => <Item key={message} message={message} />)}
      </div>
    );
  };

  render() {
    const { data, wrapItem, type } = this.props;

    return (
        <Card.Content>
            { listCardContent(tasksProps) }
        </Card.Content>
    )
  }
}

export default ListCardContect