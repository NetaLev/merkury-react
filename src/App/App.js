import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { auth } from './../firebase';
import Home from './../PageHome/Home';
import Login from './../PageLogin/Login';
import Statistics from './../PageStatistics/Statistics';
import Workflow from './../PageWorkflow/Workflow';


class App extends Component {

  // TODO: give better names to all components

  //  TODO: refactor: I prefer to seperate the UI logic from the app buisness logic. 
  //  what is the convention? check open source code (probably the solution is redux...)
  //  update: the solution is indeed redux/mobx: save  buisness data in stores and keep the UI states in the state object.
  //  after learning flux & mobx/redux - implement stores to enforce this seperation

  // TODO: refactor: create a one time data object that includes all pages data (names and paths) and use data from there in all apps routing and page handling.

  // TODO: move variables from render function if and when needed

  state = {
    currentUser: null,
    currentUserPhoto: '',
    currentUserName: '',
    sidebarVisible: true
  };

  toggleSidebarVisibility = () => this.setState({ sidebarVisible: !this.state.sidebarVisible });

  componentDidMount() {

    auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        this.setState({
          currentUser,
          currentUserPhoto: currentUser.photoURL,
          currentUserName: currentUser.displayName,
        });
      }
      else {
        this.props.history.push('/login');
      }
    });
  }

  render() {
    const { fakeData } = this.props;
    const pageHomeData = fakeData;
    const { currentUserPhoto, currentUserName, sidebarVisible } = this.state;
    const toggleSidebarVisibility = this.toggleSidebarVisibility;
    const pageProps = { sidebarVisible, toggleSidebarVisibility, currentUserPhoto };
    const pageHomeProps = { currentUserName, pageHomeData };

    return (
      <div id="App">
        <Route exact={true} path="/" render={(props) => (
          <Home {...props}
            {...pageProps}
            {...pageHomeProps} />
        )} />
        <Route path="/login" component={Login} />
        <Route path="/statistics" render={(props) => (
          <Statistics {...props}
            {...pageProps} />
        )} />
        <Route path="/workflow" render={(props) => (
          <Workflow {...props}
            {...pageProps} />
        )} />
      </div>
    );
  }
}
export default withRouter(App);
