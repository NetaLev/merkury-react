import React, { Component } from 'react'
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

class SidebarMenu extends Component {

  render() {

    const { activeItem, sidebarVisible } = this.props;
    const pusherStyle = sidebarVisible === true ? { width: 'calc(100% - 350px)' } : {};
    return (
      <Sidebar.Pushable as={Segment}>
        <Sidebar as={Menu} width='wide' visible={sidebarVisible} vertical inverted>{/*animation='push' */}
          <Link to="/">
            <Menu.Item name='Home' active={activeItem === 'Home'} />
          </Link>
          <Link to="/statistics">
            <Menu.Item name='Statistics' active={activeItem === 'Statistics'} />
          </Link>
          <Link to="/workflow">
            <Menu.Item name='Workflow' active={activeItem === 'Workflow'} />
          </Link>
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