import React, { Component } from 'react'
import { Button, Card, Image, Select, Grid } from 'semantic-ui-react';
import './ChartCard.css';
import SalesPieChart from '../SalesPieChart/SalesPieChart';
// TODO: refactor: rename for something like 'SelectionCard'

class ChartCard extends Component {
  render() {
    const options = [
      { key: 1, text: 'Choice 1', value: 1 },
      { key: 2, text: 'Choice 2', value: 2 },
      { key: 3, text: 'Choice 3', value: 3 },
    ]
    const { title } = this.props;

    return (
      <Card fluid  style={{ height: '100%' }}>
        <Card.Content style={{ height: '100%' }}>
          <Card.Header>
            <Grid columns='equal'>
              <Grid.Column>
                {title}
              </Grid.Column>
              <Grid.Column floated='right'>
                <Select placeholder='Select' options={options} compact style={{ float: 'right' }} />
              </Grid.Column>
            </Grid>
          </Card.Header>
          {this.props.children}
        </Card.Content>
      </Card>
    )
  }
}

export default ChartCard