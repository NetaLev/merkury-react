import React, {Component} from 'react'; //TODO: check the syntax 
import { Grid } from 'semantic-ui-react';
import './CenteredGrid.scss';

const WithCenteredPosition = WrappedComponent => class extends Component { //annonymous class

  static displayName = `WithCenteredPosition(${WrappedComponent.displayName || WrappedComponent.name})`; //set class nam for debug

  render() {
    return (
      <Grid {...props}
        textAlign='center'
        style={{ height: '100%' }}
        verticalAlign='middle'>
        <WrappedComponent /> {/*'should be Grid.Column or Grid.Row'*/}
      </Grid>
    );
  }
};

// const CenteredGrid = (props) => (
//   <Grid {...props}
//     textAlign='center'
//     style={{ height: '100%' }}
//     verticalAlign='middle'
//   />
// )

export default WithCenteredPosition;