import React, { Component } from 'react'
import { List, Label, Card } from 'semantic-ui-react';
import CardActionHeader from '../CardActionHeader/CardActionHeader';
import FeedList from '../FeedList/FeedList';
import './ListCard.css';

class ListCard extends Component {
  render() {
    const { title, activeCount, data, type } = this.props;
    const wrapper = Card.Content;
    const contentProps = { data, type, wrapper };
    
    return (
      <Card fluid>
        <Card.Content>
          <CardActionHeader
            title={title}
            actionElement={
              <List horizontal>
                <List.Item>
                  <List.Content>
                    <Label circular color='teal'>{activeCount}</Label>
                  </List.Content>
                </List.Item>
              </List>
            } />
        </Card.Content>
        <FeedList {...contentProps} />
      </Card>
    )
  }
}

export default ListCard