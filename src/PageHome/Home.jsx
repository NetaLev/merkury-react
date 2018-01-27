import React, { Component } from 'react';
import { Label, Select, Container, Divider, Grid, Header, Image, List, Segment, Card } from 'semantic-ui-react';
import './Home.css';
import HeaderMain from '../components/HeaderMain/HeaderMain';
import SidebarMenu from '../components/SidebarMenu/SidebarMenu';
import ChartCard from '../components/ChartCard/ChartCard';
import CardActionHeader from '../components/CardActionHeader/CardActionHeader';
import SalesPieChart from '../components/SalesPieChart/SalesPieChart';
import ReportLineChart from '../components/ReportLineChart/ReportLineChart';

class Home extends Component {

  render() {

    const { currentUserPhoto, sidebarVisible, toggleSidebarVisibility } = this.props;
    const headerMainProps = { currentUserPhoto, sidebarVisible, toggleSidebarVisibility };
    const sidebarMenuProps = { sidebarVisible, activeItem: this.constructor.name };

    const selectOptions = [
      { key: 1, text: 'Choice 1', value: 1 },
      { key: 2, text: 'Choice 2', value: 2 },
      { key: 3, text: 'Choice 3', value: 3 },
    ]

    return (
      <SidebarMenu {...sidebarMenuProps}>
        <HeaderMain {...headerMainProps} />
        <Header as='h2' attached='top' style={{ paddingTop: '55px' }}>
          Header
        </Header>
        <Grid as='Segment' attached='bottom' columns='equal' style={{ height: '100%' }}>
          <Grid.Row style={{ height: '40%' }}>
            <Grid.Column style={{ height: '100%' }} width={7}>
              <ChartCard style={{ height: '100%' }}>
                <CardActionHeader title='Your Sales'>
                  <Select placeholder='Select' options={selectOptions} compact style={{ float: 'right' }} />
                </CardActionHeader>
                <SalesPieChart />
              </ChartCard>
            </Grid.Column>
            <Grid.Column style={{ height: '100%' }}>
              <ChartCard style={{ height: '100%' }}>
                <CardActionHeader title='Report'>
                  <Select placeholder='Select' options={selectOptions} compact style={{ float: 'right' }} />
                </CardActionHeader>
                <ReportLineChart />
              </ChartCard>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row style={{ height: '60%' }}>
            <Grid.Column style={{ height: '100%' }}>
              <ChartCard style={{ height: '100%' }}>
                <CardActionHeader title='Tasks'>
                  <List horizontal>
                    <List.Item>
                      <List.Content>
                        <Label circular color='teal'  >2</Label>
                      </List.Content>
                    </List.Item>
                    <List.Item>
                      <List.Content>
                        <Label circular color='teal'  >5</Label>
                      </List.Content>
                    </List.Item>
                  </List>
                </CardActionHeader>
                <Card.Content header='About Amy' />
                <Card.Content description='description' />
                <Card.Content extra>
                  4 Friends
    </Card.Content>
              </ChartCard>
            </Grid.Column>
            <Grid.Column style={{ height: '100%' }}>
              <Card fluid style={{ height: '100%' }}
                header='Elliot Baker'
                meta='Friend'
                description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
              />
            </Grid.Column>
            <Grid.Column style={{ height: '100%' }}>
              <Card fluid style={{ height: '100%' }}
                href='#card-example-link-card'
                header='Elliot Baker'
                meta='Friend'
                description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </SidebarMenu>
    );
  }
}

export default Home;


