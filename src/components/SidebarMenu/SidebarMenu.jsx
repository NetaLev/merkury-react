import React, { Component } from 'react'
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react'

class SidebarMenu extends Component {

  state = { activeItem: 'Home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    const { sidebarVisible } = this.props;
    return (
      <Sidebar.Pushable as={Segment}>
        {/*TODO: CUSTOM MENU UI - BARS TO THE LEFT (WITH ANIMATION)*/}
        <Sidebar as={Menu} animation='push' width='wide' visible={sidebarVisible} inverted vertical>
          <Menu.Item name='Home' active={activeItem === 'Home'} onClick={this.handleItemClick} />
          <Menu.Item name='Workflow' active={activeItem === 'Workflow'} onClick={this.handleItemClick} />
          <Menu.Item name='Users' active={activeItem === 'Users'} onClick={this.handleItemClick} />
        </Sidebar>
        {/*TODO: CUSTOM PUSHER FIX - FIT WIDTH AFTER ANIMATION*/}
        <Sidebar.Pusher>
          <Segment basic>
            {this.props.children}
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    )
  }
}

export default SidebarMenu