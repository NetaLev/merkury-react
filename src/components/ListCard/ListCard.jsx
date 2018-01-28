import React, { Component } from 'react'
import { Feed, List, Label, Card, Image, Grid } from 'semantic-ui-react';
import './ListCard.css';
import CardActionHeader from '../CardActionHeader/CardActionHeader';
// TODO: refactor: rename for something like 'SelectionCard'

class ListCard extends Component {
  render() {
    const { title } = this.props;

    const image = '/assets/images/avatar/small/jenny.jpg';
    const date = '3 days ago';
    const summary = 'You added Jenny Hess to your coworker group.';

    return (
      <Card fluid>
        <Card.Content>
          <CardActionHeader
            title={title}
            actionElement={
              <List horizontal>
                <List.Item>
                  <List.Content>
                    <Label circular color='teal'  >2</Label>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Content>
                    <Label circular color='teal'  >5</Label>
                  </List.Content>
                </List.Item>
              </List>
            } />
        </Card.Content>
        <Card.Content>
          <Feed>
            <Feed.Event image={image} date={date} summary={summary} />
          </Feed>
        </Card.Content>
        <Card.Content>
          <Feed>
            <Feed.Event>
              <Feed.Label image={image} />
              <Feed.Content date={date} summary={summary} />
            </Feed.Event>
          </Feed>
        </Card.Content>
      </Card>
    )
  }
}

export default ListCard