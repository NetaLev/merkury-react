import React, { Component } from 'react';
import { auth, googleAuthProvider } from './../firebase';

class SignIn extends Component {
  render() {
    return (
      <div className="SignIn">
        <button onClick={() => auth.signInWithRedirect(googleAuthProvider)}>Enter</button>
      </div>
    );
  }
}

export default SignIn;
