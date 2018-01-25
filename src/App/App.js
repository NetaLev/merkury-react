import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { auth } from './../firebase';
import Home from './../PageHome/Home';
import Login from './../PageLogin/Login';
import Statistics from './../PageStatistics/Statistics';
import Workflow from './../PageWorkflow/Workflow';

class App extends Component {

  //  TODO: refactor: add container seperation. I prefer to seperate the UI logic from the app functionality logic. 
  //  what is the convention? check open source code (probably the solution is redux...)
  state = {
    currentUser: null,
    currentUserPhoto: '',
    sidebarVisible: true
  };

  toggleSidebarVisibility = () => this.setState({ sidebarVisible: !this.state.sidebarVisible });

  componentDidMount() {
    auth.onAuthStateChanged((currentUser) => {
      console.log('onAuthStateChanged', currentUser);
      if (currentUser) {
        this.setState({ currentUser,  currentUserPhoto: currentUser.photoURL});
      }
      else {
        console.log('onAuthStateChanged go to login');
        this.props.history.push('/login');
      }
    });
  }

  render() {
    const { currentUser, currentUserPhoto, sidebarVisible } = this.state;
    const toggleSidebarVisibility = this.toggleSidebarVisibility;
    const pageProps = { sidebarVisible, toggleSidebarVisibility, currentUserPhoto};

    return (
      // TODO: check what is the recommended convention to name id/class of components
      <div id="App">
        <Route path="/login" component={Login} />
        <Route exact={true} path="/" render={(props) => (
          <Home {...props} //INFO: adds routing stuff: history, location, match
             {...pageProps}/>
        )} />
        <Route exact={true} path="/statistics" render={(props) => (
          <Statistics {...props}
             {...pageProps}/>
        )} />
        <Route exact={true} path="/workflow" render={(props) => (
          <Workflow {...props} 
             {...pageProps}/>
        )} />
      </div>
    );
  }
}
export default withRouter(App);
