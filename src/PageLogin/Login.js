import React, { Component } from 'react';
import { Menu, Button, Form, Grid, Header, Segment } from 'semantic-ui-react';
import { auth, googleAuthProvider } from './../firebase';
import './PageLogin.css';

class Login extends Component {
  state = { error: '' };

  onLogin = () => {
    this.props.history.push("/");
  }

  handleLogin = () => {
    auth.signInWithPopup(googleAuthProvider)
      .then(res => {
        this.onLogin();
      });
    /* TODO: FIX BUG DERIVED FROM FIREBASE SDK BUG: error "auth/popup-closed-by-user" happens when using chrome incognito and signing in with popup for the first time.
    signin again solves this issue. checked- and this is a known bug in firebase SDK, and not a bug in my code.
     .catch(error => {
       console.log('Error logging in.', error);
         this.setState({ error: 'Error logging in.' });
     }); */
  }

  render() {
    return (
      <Grid
        className="page-login__outer-grid"
        centered
        container
        textAlign='center'
        verticalAlign='middle'
      >
        <Grid.Column>
          <Menu attached="top">
            <Menu.Item name='home' />
          </Menu>
          <Segment
            attached="bottom"
            padded="very"
          >
            <Grid>
              <Grid.Column
                className="page-login__content-box"
                textAlign='center'
                stretched
                verticalAlign='middle'
              >
                <div></div> {/*TODO: replace spacer with css*/}
                <div>
                  <Header as='h2' color='teal'>
                    Welcome back!
                  </Header>
                  <Header as='h2' color='teal'>
                    Log-in to your account with Google
                  {/* TODO: after adding custom css according to psd, add <Image /> */}
                  </Header>
                </div>
                <Form size='large'>
                  <Button 
                    color='teal' 
                    size='large' 
                    onClick={this.handleLogin}
                  >
                    Enter
                  </Button>
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
