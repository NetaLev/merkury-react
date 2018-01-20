import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import Category from './../PageCategory/Category';
import Products from './../PageProducts/Products';
import Home from './../PageHome/Home';
import { auth } from './../firebase';
import Login from './../PageLogin/Login';
import Test from './../PageTest/Test.1';

class App extends Component {

  //  TODO: refactor: add container seperation. I prefer to seperate the UI logic from the app functionality logic. 
  //  what is the convention? check open source code (probably the solution is redux...)
  state = {
    currentUser: null,
    sidebarVisible: false
  };

  // logout = () => {
  // }

  toggleSidebarVisibility = () => this.setState({ sidebarVisible: !this.state.sidebarVisible });

  componentDidMount() {
    auth.onAuthStateChanged((currentUser) => {
      console.log('onAuthStateChanged', currentUser);
      if (currentUser) {
        this.setState({ currentUser });
      }
      else {
        console.log('onAuthStateChanged go to login');
        this.props.history.push('/login');
      }
    });
  }

  render() {
    const { currentUser, sidebarVisible } = this.state;
    const toggleSidebarVisibility = this.toggleSidebarVisibility;
    const pageProps = {sidebarVisible, toggleSidebarVisibility};

    return (
      // TODO: check what is the recommended convention to name id/class of components
      <div id="App">
        <Route exact={true} path="/" render={(props) => (
          <Home {...props} //adds routing stuff: history, location, match
             {...pageProps}/>
        )} />

        {/* <Route path="/login" component={Login}/> */}
        <Route path="/login" component={Test} />
        <Route path="/category" component={Category} />
        <Route path="/products" component={Products} />

        {/* <Route path='/page' render={(props) => (
          <Page {...props} data={extraProps} />
        )} /> */}
      </div>



    );
  }
}
export default withRouter(App);
