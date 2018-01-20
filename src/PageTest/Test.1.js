import React, { Component } from 'react';
import { Menu, Button, Form, Grid, Header, Image, Message, Segment, Container } from 'semantic-ui-react';
import './Test.css';

const Test = () => (
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
              <Button color='teal' size='large'>Enter</Button>
            </Form>
          </Grid.Column>
        </Grid>
      </Segment>
    </Grid.Column>
  </Grid>

);
export default Test;