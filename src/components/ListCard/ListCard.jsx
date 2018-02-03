import React, { Component } from 'react'
import { Feed, List, Label, Card, Image, Grid } from 'semantic-ui-react';
import './ListCard.css';
import CardActionHeader from '../CardActionHeader/CardActionHeader';
//import ListCardContent from '../ListCardContent/ListCardContent';
import FeedList from '../FeedList/FeedList';
// TODO: refactor: rename for something like 'SelectionCard'

class ListCard extends Component {
  render() {
    const { title, activeCount, data, wrapItem, type } = this.props;
    const contentProps = {data, type};

    //console.log('### list card props ###');
    //console.log(this.props);

    return (
      <Card fluid>
        <Card.Content>
          <CardActionHeader
            title={title}
            actionElement={
              <List horizontal>
                <List.Item>
                  <List.Content>
                    <Label circular color='teal'>{ activeCount }</Label>
                  </List.Content>
                </List.Item>
              </List>
            } />
        </Card.Content>
         {/*TODO: use 
         https://reactjs.org/docs/jsx-in-depth.html#choosing-the-type-at-runtime*/}
         {/* <Card.Content> */}
           <FeedList {...contentProps}/>
        {/* </Card.Content> */}
      </Card>
    )
  }
}

export default ListCard