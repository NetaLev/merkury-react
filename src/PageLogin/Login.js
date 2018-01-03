import React, { Component } from 'react';
import './PageLogin.css';
import { auth, googleAuthProvider } from './../firebase';

class Login extends Component {
  state = { error: '' };

  onLogin() {
    this.props.history.push("/");
    console.log('pushed');
    alert('pushed');
    this.setState({ error: 'pushed' });
  }

  login() {
    auth.signInWithRedirect(googleAuthProvider)
      .then(res => {
        console.log('on login');
        alert('login');
        this.setState({ error: 'on login' });
        this.onLogin();
      })
      .catch(error => {
        console.log('error');
        alert('login error');
          this.setState({ error: 'Error logging in.' });
      });
  }

  render() {
    return (
      <div className="Login">
        <button onClick={() => this.login()}>Enter</button>
      </div>
    );
  }
}

export default Login;
