import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import Category from './../PageCategory/Category';
import Products from './../PageProducts/Products';
import Home from './../PageHome/Home';
import { auth } from './../firebase';
import Login from './../PageLogin/Login';

class App extends Component {

  //  TODO: refactor: add container seperation. I prefer to seperate the UI logic from the app functionality logic. 
  //  what is the convention? check open source code (probably the solution is redux...)
  state = {
    currentUser: null,
    currentUserPhoto: '',
    sidebarVisible: false
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
    const pageProps = { currentUserPhoto, sidebarVisible, toggleSidebarVisibility};

    return (
      // TODO: check what is the recommended convention to name id/class of components
      <div id="App">
        <Route exact={true} path="/" render={(props) => (
          <Home {...props} //adds routing stuff: history, location, match
             {...pageProps}/>
        )} />
        <Route path="/login" component={Login} />
        <Route path="/category" component={Category} />
        <Route path="/products" component={Products} />
      </div>
    );
  }
}
export default withRouter(App);
