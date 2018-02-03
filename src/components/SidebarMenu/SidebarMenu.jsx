import React, { Component } from 'react'
import { Sidebar, Segment, Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

class SidebarMenu extends Component {

  /* TODO: refactor sidebar fix hardcoded stuff. make a steady, modifiable and reusable code using a property to handle the animation override & new responsive pusher width feature */

  render() {
    const { activeItem, sidebarVisible } = this.props;
    const pusherStyle = sidebarVisible === true ? { width: 'calc(100% - 350px)', height: '100%' } : {height: '100%'};
    return (
      <Sidebar.Pushable as= {Segment}>
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
          
          {this.props.children}
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    )
  }
}

export default SidebarMenu