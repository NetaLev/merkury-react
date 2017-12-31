import React, { Component } from 'react';
import logo from './logo.svg';
import './PageLogin.css';
import { database, auth } from './../firebase';
import SignIn from './SignIn';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    };
  }

componentDidMount() {
  /*database.ref().on('value', () => {
    console.log('the data changed');
  });*/
  auth.onAuthStateChanged((currentUser) => {
    console.log('AUTH_CHANGE', currentUser);
    this.setState({currentUser});
  });
}

render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <SignIn />
      </div>
    );
  }
}

export default Login;
