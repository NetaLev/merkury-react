import React, { Component } from 'react'
import { Select, Card } from 'semantic-ui-react';
import CardActionHeader from '../CardActionHeader/CardActionHeader';
import './ChartCard.css';
// TODO: refactor: rename for something like 'SelectionCard'

class ChartCard extends Component {
  render() {
    const { title } = this.props;

    const selectOptions = [
      { key: 1, text: 'Choice 1', value: 1 },
      { key: 2, text: 'Choice 2', value: 2 },
      { key: 3, text: 'Choice 3', value: 3 },
    ]

    return (
      <Card fluid style={{ height: '100%' }}>
        <Card.Content style={{ height: '100%' }}>
          <CardActionHeader
            title= {title}
            actionElement={
              <Select placeholder='Select' options={selectOptions} compact />
            } />
            {/* TODO: CHECK IF  style={{ float: 'right' }} in select IS STILL NEEDED */}
          {this.props.children}
        </Card.Content>
      </Card>
    )
  }
}

export default ChartCard