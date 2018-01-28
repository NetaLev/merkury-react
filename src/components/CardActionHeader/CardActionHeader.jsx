import React, { Component } from 'react'
import { Card, Grid } from 'semantic-ui-react';
import './CardActionHeader.css';
import SplitPane from '../SplitPane/SplitPane';

class CardActionHeader extends Component {
  render() {
    const { title, actionElement } = this.props;
    return (
      <Card.Header>
        <SplitPane
          left= { title }
          right= { actionElement } />
      </Card.Header>
    )
  }
}

export default CardActionHeader

// <Grid columns='equal'>
//           <Grid.Column>
//             {title}
//           </Grid.Column>
//           <Grid.Column className='card-action-header__actions'>
//             {this.props.children}
//           </Grid.Column>
//         </Grid>

// return (
//   <SplitPane
//     left={
//       <Contacts />
//     }
//     right={
//       <Chat />
//     } />
// );