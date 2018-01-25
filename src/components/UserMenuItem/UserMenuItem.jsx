import React, { Component } from 'react'
import { Dropdown, Icon, Menu, Image } from 'semantic-ui-react';
import './UserMenuItem.css';

class UserMenuItem extends Component {

  render() {
    const { handleLogout,currentUserPhoto } = this.props;
    //const triangleIconClasses = sidebarVisible === true ? 'toggleSidebarMenuItem__triangleIcon--toggled' : '';
    const src = currentUserPhoto;

    const trigger = (
        <Image src={src} circular size='mini' />
    )
    return (
      <Dropdown item as='a' trigger={trigger} icon='triangle down' >
        <Dropdown.Menu>
            <Dropdown.Item onClick={handleLogout}>Log out</Dropdown.Item>
            <Dropdown.Item>Medium</Dropdown.Item>
            <Dropdown.Item>Large</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
    )
  }
}



export default UserMenuItem