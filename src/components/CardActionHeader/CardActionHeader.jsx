import React, { Component } from 'react'
import { Card, Grid } from 'semantic-ui-react';
import './CardActionHeader.css';

class CardActionHeader extends Component {
  render() {
    const { title } = this.props;
    return (
      <Card.Header>
        <Grid columns='equal'>
          <Grid.Column>
            {title}
          </Grid.Column>
          <Grid.Column className='card-action-header__actions'>
            {this.props.children}
          </Grid.Column>
        </Grid>
      </Card.Header>
    )
  }
}

export default CardActionHeader