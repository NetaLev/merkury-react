import React, { Component } from 'react'
import { Icon, Container, Divider, Dropdown, Header, Image, List, Menu, Segment, Button } from 'semantic-ui-react';
import ToggleSidebarMenuItem from '../ToggleSidebarMenuItem/ToggleSidebarMenuItem';
import { auth, googleAuthProvider } from '../../firebase';

class HeaderMain extends Component {

  onLogout = () => {
    console.log('on logout');
    this.props.history.push("/login"); //is this necessry?
  }

  handleLogout = () => {
    auth.signOut().then(function() {
    }).catch(function(error) {
      console.log('Error logging out.', error);
      this.setState({ error: 'Error logging out.' });
    });
  };

  render() {
    const { sidebarVisible, toggleSidebarVisibility } = this.props;
    const toggleSidebarMenuItemProps = { sidebarVisible, toggleSidebarVisibility };
    return (
      <Menu fixed='top'>
        <ToggleSidebarMenuItem {...toggleSidebarMenuItemProps}>
        </ToggleSidebarMenuItem>
        <Menu.Item as='a'>Home</Menu.Item>
        <Dropdown item simple text='Dropdown'>
          <Dropdown.Menu>
            <Dropdown.Item>List Item</Dropdown.Item>
            <Dropdown.Item>List Item</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Header>Header Item</Dropdown.Header>
            <Dropdown.Item>
              <i className='dropdown icon' />
              <span className='text'>Submenu</span>
              <Dropdown.Menu>
                <Dropdown.Item>List Item</Dropdown.Item>
                <Dropdown.Item>List Item</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown.Item>
            <Dropdown.Item>List Item</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Menu.Menu position='right'>
          <Menu.Item className='item'>
            <Button as='a'>Log out</Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}

export default HeaderMain