import React, { Component } from 'react';
import { Container, Header } from 'semantic-ui-react';
import './Statistics.css';
import HeaderMain from '../components/HeaderMain/HeaderMain';
import SidebarMenu from '../components/SidebarMenu/SidebarMenu';

class Statistics extends Component {


  render() {

    const { currentUserPhoto, sidebarVisible, toggleSidebarVisibility } = this.props;
    const headerMainProps = { currentUserPhoto, sidebarVisible, toggleSidebarVisibility };
    const sidebarMenuProps = {sidebarVisible, activeItem: this.constructor.name};

    return (
      <SidebarMenu {...sidebarMenuProps}>
        <HeaderMain {...headerMainProps}/>
        {/* TODO: container fix: always position children to center */}
        <Container text style={{ marginTop: '7em' }}>
          <h2>Statistics</h2>
          <Header as='h1'>Semantic UI React Fixed Template</Header>
          <p>This is a basic fixed menu template using fixed size containers.</p>
          <p>A text container is used for the main container, which is useful for single column layouts.</p>
        </Container>
      </SidebarMenu>
    );
  }
}

export default Statistics;


