import React, { Component } from 'react';
import './PageLogin.css';
import { Menu, Button, Form, Grid, Header, Image, Message, Segment, Container } from 'semantic-ui-react';
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

  render() {
    return (
      <Grid centered
        container
        textAlign='center'
        style={{ height: '100%' }}
        verticalAlign='middle'
      >
        <Grid.Column>
          <Menu attached="top">
            <Menu.Item name='home' />
          </Menu>
          <Segment attached="bottom" padded="very">
            <Grid>
              <Grid.Column
                style={{ minHeight: '45vh' }}
                textAlign='center'
                stretched
                verticalAlign='middle'>
                <div></div> {/*spacer*/}
                <div>
                  <Header as='h2' color='teal'>
                    Welcome back!
            </Header>
                  <Header as='h2' color='teal'>
                    Log-in to your account with Google
              <Image />
                  </Header>
                </div>
                <Form size='large'>
                  <Button color='teal' size='large' onClick={this.handleLogin}>Enter</Button>
                </Form>
              </Grid.Column>
            </Grid>
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}

export default Login;
