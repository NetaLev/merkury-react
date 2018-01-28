import React, { Component } from 'react';
import { Label, Select, Container, Divider, Grid, Header, Image, List, Segment, Card } from 'semantic-ui-react';
import './Home.css';
import HeaderMain from '../components/HeaderMain/HeaderMain';
import SidebarMenu from '../components/SidebarMenu/SidebarMenu';
import CardActionHeader from '../components/CardActionHeader/CardActionHeader';
import ChartCard from '../components/ChartCard/ChartCard';
import ListCard from '../components/ListCard/ListCard';
import SalesPieChart from '../components/SalesPieChart/SalesPieChart';
import ReportLineChart from '../components/ReportLineChart/ReportLineChart';

class Home extends Component {

  render() {

    const { currentUserPhoto, sidebarVisible, toggleSidebarVisibility } = this.props;
    const headerMainProps = { currentUserPhoto, sidebarVisible, toggleSidebarVisibility };
    const sidebarMenuProps = { sidebarVisible, activeItem: this.constructor.name };


    return (
      <SidebarMenu {...sidebarMenuProps}>
        <HeaderMain {...headerMainProps} />
        <Header as='h2' attached='top' style={{ paddingTop: '55px' }}>
          Header
        </Header>
        <Grid as={Segment} attached='bottom' columns='equal' style={{ height: '100%' }}>
          <Grid.Row style={{ height: '40%' }}>
            <Grid.Column style={{ height: '100%' }} width={7}>
              <ChartCard title='Your Sales' style={{ height: '100%' }}>
                <SalesPieChart />
              </ChartCard>
            </Grid.Column>
            <Grid.Column style={{ height: '100%' }}>
              <ChartCard title='Report' style={{ height: '100%' }}>
                <ReportLineChart />
              </ChartCard>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row style={{ height: '60%' }}>
            <Grid.Column style={{ height: '100%' }}>
              <ListCard title='Tasks' style={{ height: '100%' }}>
              </ListCard>
            </Grid.Column>
            <Grid.Column style={{ height: '100%' }}>
              <ListCard title='Messages' style={{ height: '100%' }}>
              </ListCard>
            </Grid.Column>
            <Grid.Column style={{ height: '100%' }}>
              <ListCard title='Activity' style={{ height: '100%' }}>
              </ListCard>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </SidebarMenu>
    );
  }
}

export default Home;


