import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react';
import './LeftRightGrid.css';

class LeftRightGrid extends Component {
  render() {
    return (
      <Grid columns='equal'>
        <Grid.Column>
          {this.props.children[0]}
        </Grid.Column>
        <Grid.Column className='left-right-grid__right'>
          {/* TODO: change to rest of children */}
          {this.props.children[1]}
        </Grid.Column>
      </Grid>
    )
  }
}

export default LeftRightGrid