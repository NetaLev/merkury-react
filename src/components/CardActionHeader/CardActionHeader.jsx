import React, { Component } from 'react'
import { Card } from 'semantic-ui-react';
import SplitPane from '../SplitPane/SplitPane';
import './CardActionHeader.css';

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