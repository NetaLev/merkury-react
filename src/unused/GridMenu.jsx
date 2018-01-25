import React, { Component } from 'react'
import { Grid, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react'

class SidebarMenu extends Component {

  render() {
    const { sidebarVisible } = this.props;
    //'visible={sidebarVisible}
    return (
      <Grid columns='equal'>
        <Grid.Column width={4} as={Menu} vertical inverted>
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
        </Grid.Column>

        <Grid.Column >
            {this.props.children}
        </Grid.Column>
      </Grid>
    )
  }
}

export default SidebarMenu
/*
import React from 'react'
import { Grid, Image } from 'semantic-ui-react'

const GridExampleColumnWidth = () => (
  <Grid columns='equal'>
    <Grid.Column width={4}>
      <Image src='/assets/images/wireframe/image.png' />
    </Grid.Column>
    <Grid.Column>
      <Image src='/assets/images/wireframe/paragraph.png' />
    </Grid.Column>
  </Grid>
)

export default GridExampleColumnWidth */

/*const SomeComponent = (props) => {
  return props.isSegmentVisible && <Segment />
}

// Or for more complex components, an early return could be more clear.
const SomeComponent = (props) => {
  if (!props.isSegmentVisible) return null

  return <Segment />
}*/