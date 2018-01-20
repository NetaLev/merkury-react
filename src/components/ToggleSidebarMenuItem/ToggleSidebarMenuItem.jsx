import React, { Component } from 'react'
import { Icon, Menu } from 'semantic-ui-react';
import './ToggleSidebarMenuItem.css';

class ToggleSidebarMenuItem extends Component {

  render() {
    const { sidebarVisible, toggleSidebarVisibility } = this.props;
    const triangleIconClasses = sidebarVisible === true ? 'toggleSidebarMenuItem__triangleIcon--toggled' : '';
    return (
        <Menu.Item header as='a' onClick={toggleSidebarVisibility}>
          <Icon fitted name='triangle right' size='large' className={triangleIconClasses} />
          <Icon name='sidebar' size='big' />
        </Menu.Item>
    )
  }
}

export default ToggleSidebarMenuItem