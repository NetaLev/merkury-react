import React, {Component} from 'react'; //TODO: check the syntax 
import { Grid } from 'semantic-ui-react';
import './CenteredGrid.css';

const WithCenteredPosition = WrappedComponent => class extends Component { //annonymous class

  //TODO: check why naming is not working the way it should
  static displayName = `WithCenteredPosition(${WrappedComponent.displayName || WrappedComponent.name})`; //set class nam for debug

  render() {
    return (
      <Grid //{...props}
      container
        textAlign='center'
        style={{ height: '100%' }}
        verticalAlign='middle'>
        <WrappedComponent /> {/*'should be Grid.Column or Grid.Row'*/}
      </Grid>
    );
  }
};

export default WithCenteredPosition;