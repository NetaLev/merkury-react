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

import ActivityFeed from '../components/ActivityFeed/ActivityFeed';
import MessageFeed from '../components/MessageFeed/MessageFeed';
import TaskFeed from '../components/TaskFeed/TaskFeed';

class Home extends Component {
  render() {
    const { currentUserPhoto,
            currentUserName,
            pageHomeData,
            sidebarVisible,
            toggleSidebarVisibility } = this.props;
    
    //console.log(`PROPS:`);        
    //console.log(this.props);

    const headerMainProps = { currentUserPhoto, sidebarVisible, toggleSidebarVisibility };
    const sidebarMenuProps = { sidebarVisible, activeItem: this.constructor.name };
    const welcomeGreet = `Hello ${currentUserName}`;

    const salesPieChartProps = pageHomeData.sales;
    const reportLineChartProps = pageHomeData.report;

    //TODO: DRY - group tasksProps, messagesProps, activitiesProps 
    //and treat all of them the same with generic functions
    const tasksProps = pageHomeData.tasks;
    //tasksProps['wrapItem'] = true;
    tasksProps['type'] = TaskFeed;

    const messagesProps = pageHomeData.messages;
    //messagesProps['wrapItem'] = true;
    messagesProps['type'] = MessageFeed;

    const activitiesProps = pageHomeData.activities;
    //activitiesProps['wrapItem'] = false;
    activitiesProps['type'] = ActivityFeed;

    return (
      <SidebarMenu {...sidebarMenuProps}>
        <HeaderMain {...headerMainProps} />
        <Header as='h2' attached='top' style={{ paddingTop: '55px' }}>
          {welcomeGreet}
        </Header>
        <Grid as={Segment} attached='bottom' columns='equal' style={{ height: '100%' }}>
          <Grid.Row style={{ height: '40%' }}>
            <Grid.Column style={{ height: '100%' }} width={7}>
              <ChartCard title='Your Sales' style={{ height: '100%' }}>
                <SalesPieChart {...salesPieChartProps} />
              </ChartCard>
            </Grid.Column>
            <Grid.Column style={{ height: '100%' }}>
              <ChartCard title='Report' style={{ height: '100%' }}>
                <ReportLineChart {...reportLineChartProps} />
              </ChartCard>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row style={{ height: '60%' }}>
            <Grid.Column style={{ height: '100%' }}>
              <ListCard title='Tasks'
                {...tasksProps}
                style={{ height: '100%' }}>
              </ListCard>
            </Grid.Column>
            <Grid.Column style={{ height: '100%' }}>
              <ListCard title='Messages'
                {...messagesProps}
                style={{ height: '100%' }}>
              </ListCard>
            </Grid.Column>
            <Grid.Column style={{ height: '100%' }}>
              <ListCard title='Activity'
                {...activitiesProps}
                style={{ height: '100%' }}>
                
              </ListCard>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </SidebarMenu>
    );
  }
}

export default Home;


