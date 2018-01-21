import React, { Component } from 'react';
import { Container, Divider, Grid, Header, Image, List, Segment } from 'semantic-ui-react';
import './Workflow.css';
import HeaderMain from '../components/HeaderMain/HeaderMain';
import SidebarMenu from '../components/SidebarMenu/SidebarMenu';

class Workflow extends Component {

  render() {
    const { currentUserPhoto, sidebarVisible, toggleSidebarVisibility } = this.props;
    const headerMainProps = { currentUserPhoto, sidebarVisible, toggleSidebarVisibility };
    const sidebarMenuProps = {sidebarVisible};

    return (
      <SidebarMenu {...sidebarMenuProps}>
        <HeaderMain {...headerMainProps}/>
        <Container text style={{ marginTop: '7em' }}>
          <h2>Workflow</h2>
        </Container>
      </SidebarMenu>
    );
  }
}

export default Workflow;


