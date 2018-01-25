import React, { Component } from 'react'
import { Button, Card, Image, Select, Grid } from 'semantic-ui-react';
import './ChartCard.css';

class ChartCard extends Component {

  render() {
    //const { handleLogout,currentUserPhoto } = this.props;
    //const triangleIconClasses = sidebarVisible === true ? 'toggleSidebarMenuItem__triangleIcon--toggled' : '';
    return (
      <Card fluid>
        <Card.Content>
          <Card.Header>
            <Grid columns='equal'>
              <Grid.Column>
                Header
              </Grid.Column>
              <Grid.Column>
                <Select placeholder='Select your country' />
              </Grid.Column>
            </Grid>
          </Card.Header>
        </Card.Content>
      </Card>
    )
  }
}

export default ChartCard

{/* <Menu borderless>
<Menu.Item >
  Your Sales
  </Menu.Item>
<Menu.Menu position='right'>
  <Dropdown item text='Categories'>
    <Dropdown.Menu>
      <Dropdown.Item>Electronics</Dropdown.Item>
      <Dropdown.Item>Automotive</Dropdown.Item>
      <Dropdown.Item>Home</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>

</Menu.Menu>

</Menu> */}