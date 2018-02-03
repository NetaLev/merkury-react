import React, { Component } from 'react'
import { Label, Icon, Container, Divider, Dropdown, Header, Image, List, Menu, Segment, Button } from 'semantic-ui-react';
import ToggleSidebarMenuItem from '../ToggleSidebarMenuItem/ToggleSidebarMenuItem';
import UserMenuItem from '../UserMenuItem/UserMenuItem';
import { auth, googleAuthProvider } from '../../firebase';

class HeaderMain extends Component {

  handleLogout = () => {
    auth.signOut().then(function () {
    }).catch(function (error) {
      console.log('Error logging out.', error);
      this.setState({ error: 'Error logging out.' });
    });
  };

  render() {
    const handleLogout = this.handleLogout;
    const { currentUserPhoto, sidebarVisible, toggleSidebarVisibility } = this.props;
    const toggleSidebarMenuItemProps = { sidebarVisible, toggleSidebarVisibility };
    const userMenuItemProps = { currentUserPhoto, handleLogout };
    return (
      <Menu fixed='top' borderless>
        <ToggleSidebarMenuItem {...toggleSidebarMenuItemProps} />
        <Menu.Item as='a'>
          <Icon name='search' size='large' />
        </Menu.Item>

        <Menu.Menu position='right'>
          <Menu.Item as='a'>
            <Icon name='bell' size='large'>
              <Label attached='top right' circular color='teal'>22</Label>
            </Icon>
          </Menu.Item>
          <Menu.Item as='a'>
            <Icon name='mail' size='large' />
          </Menu.Item>
          <UserMenuItem {...userMenuItemProps} />
          <Menu.Item className='item'>
            <Button as='a' >Add Project</Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}

export default HeaderMain