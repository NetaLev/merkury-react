import React, { Component } from 'react'
import { Button, Card, Image, Select, Grid } from 'semantic-ui-react';
import './ChartCard.css';
import SalesPieChart from '../SalesPieChart/SalesPieChart';
// TODO: refactor: rename for something like 'SelectionCard'

class ChartCard extends Component {
  render() {
    const { title } = this.props;
    return (
      <Card fluid  style={{ height: '100%' }}>
        <Card.Content style={{ height: '100%' }}>
          {this.props.children}
        </Card.Content>
      </Card>
    )
  }
}

export default ChartCard