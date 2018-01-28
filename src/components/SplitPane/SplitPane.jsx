import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react';
import './SplitPane.css';

// TODO: rename to SplitPane

class SplitPane extends Component {
  render() {
    const { left, right } = this.props;
    return (
      <Grid columns='equal'>
        <Grid.Column>
          {left}
        </Grid.Column>
        <Grid.Column className='split-pane__right'>
          {right}
        </Grid.Column>
      </Grid>
    )
  }
}

export default SplitPane