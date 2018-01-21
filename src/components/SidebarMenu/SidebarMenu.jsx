import React, { Component } from 'react'
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react'

class SidebarMenu extends Component {
  state = { activeItem: 'Home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    const { sidebarVisible } = this.props;
    const pusherStyle = sidebarVisible === true ? { width: 'calc(100% - 350px)' } : {};
    return (
      <Sidebar.Pushable as={Segment}>
        <Sidebar as={Menu} width='wide' visible={sidebarVisible} vertical inverted>{/*animation='push' */}
          <Menu.Item name='Home' active={activeItem === 'Home'} onClick={this.handleItemClick} />
          <Menu.Item name='Statistics' active={activeItem === 'Statistics'} onClick={this.handleItemClick} />
          <Menu.Item name='Users' active={activeItem === 'Users'} onClick={this.handleItemClick} />
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