import React, { Component } from 'react';
import { Container, Divider, Grid, Header, Image, List, Segment, Card } from 'semantic-ui-react';
import './Home.css';
import HeaderMain from '../components/HeaderMain/HeaderMain';
import SidebarMenu from '../components/SidebarMenu/SidebarMenu';
import ChartCard from '../components/ChartCard/ChartCard';

class Home extends Component {

  render() {

    const { currentUserPhoto, sidebarVisible, toggleSidebarVisibility } = this.props;
    const headerMainProps = { currentUserPhoto, sidebarVisible, toggleSidebarVisibility };
    const sidebarMenuProps = { sidebarVisible, activeItem: this.constructor.name };

    return (
      <SidebarMenu {...sidebarMenuProps}>
        <HeaderMain {...headerMainProps} />
        <Header as='h2' attached='top' style={{ paddingTop: '55px' }}>
          Header
        </Header>
        <Segment attached='bottom' style={{ height: '100%' }}>
          <Grid celled columns='equal' style={{ height: '100%' }}>
            <Grid.Row >
              <Grid.Column>
                <ChartCard />
              </Grid.Column>
              <Grid.Column>
                <Card fluid
                  header='Elliot Baker'
                  meta='Friend'
                  description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
                />
              </Grid.Column>
            </Grid.Row>

            <Grid.Row >
              <Grid.Column>
                <Card fluid
                  header='Elliot Baker'
                  meta='Friend'
                  description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
                />
              </Grid.Column>
              <Grid.Column>
                <Card fluid
                  header='Elliot Baker'
                  meta='Friend'
                  description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
                />
              </Grid.Column>
              <Grid.Column>
                <Card fluid
                  href='#card-example-link-card'
                  header='Elliot Baker'
                  meta='Friend'
                  description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

      </SidebarMenu>
    );
  }
}

export default Home;


