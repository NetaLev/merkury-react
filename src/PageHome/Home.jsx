import React, { Component } from 'react';
import { Container, Divider, Grid, Header, Image, List, Segment } from 'semantic-ui-react';
import './Home.css';
import HeaderMain from '../components/HeaderMain/HeaderMain';
import SidebarMenu from '../components/SidebarMenu/SidebarMenu';

class Home extends Component {

  render() {
    //console.log(this.props);

    const { currentUserPhoto, sidebarVisible, toggleSidebarVisibility } = this.props;
    //currentUser[photoURL]
    //if (currentUsePhoto!= null) {
      //console.log(currentUserPhoto);
    //}
    
    const headerMainProps = { currentUserPhoto, sidebarVisible, toggleSidebarVisibility };
    const sidebarMenuProps = {sidebarVisible};

    return (
      <SidebarMenu {...sidebarMenuProps}>
        <HeaderMain {...headerMainProps}/>
        {/* TODO: container fix: always position children to center */}
        <Container text style={{ marginTop: '7em' }}>
          <h2>Home</h2>
          <Header as='h1'>Semantic UI React Fixed Template</Header>
          <p>This is a basic fixed menu template using fixed size containers.</p>
          <p>A text container is used for the main container, which is useful for single column layouts.</p>

        </Container>

      </SidebarMenu>
    );
  }
}

export default Home;


