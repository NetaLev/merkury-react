import React, { Component } from 'react'
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react'

class SidebarMenu extends Component {

  render() {
    const { sidebarVisible } = this.props;
    const pusherStyle = sidebarVisible === true ? { width: 'calc(100% - 350px)' } : {};
    return (
      <Sidebar.Pushable as={Segment}>
        <Sidebar as={Menu} width='wide' visible={sidebarVisible} icon='labeled' vertical inverted>{/*animation='push' */}
          <Menu.Item name='home'>
            <Icon name='home' />
            Home
            </Menu.Item>
          <Menu.Item name='gamepad'>
            <Icon name='gamepad' />
            Games
            </Menu.Item>
          <Menu.Item name='camera'>
            <Icon name='camera' />
            Channels
            </Menu.Item>
        </Sidebar>
        <Sidebar.Pusher style={pusherStyle}>
          {/* TODO: refactor sidebar fix to make it steady, modifiable and reusable using a property to handle the animation override & new responsive pusher width feature */}
          {/* <Segment basic> */}
          {this.props.children}
          {/* </Segment> */}
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    )
  }
}

export default SidebarMenu