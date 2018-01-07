import React, { Component } from 'react';
import './PageLogin.css';
import { auth, googleAuthProvider } from './../firebase';

class Login extends Component {
  state = { error: '' };

  onLogin = () => {
    console.log('on login');
    this.props.history.push("/");
  }

  handleLogin = () => {
    auth.signInWithPopup(googleAuthProvider)
      .then(res => {
        console.log('handleLogin callback success', res);
        this.onLogin();
      });
      /* FIREBASE SDK BUG: error "auth/popup-closed-by-user" happens when using chrome incognito and signing in with popup for the first time.
      signin again solves this issue. checked- and this is a known bug in firebase SDK, and not a bug in my code.
       .catch(error => {
         console.log('Error logging in.', error);
           this.setState({ error: 'Error logging in.' });
       }); */
  }

  handleLogout = () => {
    auth.signOut().then(function() {
    }).catch(function(error) {
      console.log('Error logging out.', error);
      this.setState({ error: 'Error logging out.' });
    });
  };

  render() {
    return (
      <div id="Login">
        <button onClick={this.handleLogin}>Enter</button>
        <button onClick={this.handleLogout}>Logout</button>
      </div>
    );
  }
}

export default Login;
