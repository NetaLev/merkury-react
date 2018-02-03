import React, { Component } from 'react';
import { Grid, Header, Segment } from 'semantic-ui-react';
import './Home.css';
import HeaderMain from '../components/HeaderMain/HeaderMain';
import SidebarMenu from '../components/SidebarMenu/SidebarMenu';
import ChartCard from '../components/ChartCard/ChartCard';
import ListCard from '../components/ListCard/ListCard';
import SalesPieChart from '../components/SalesPieChart/SalesPieChart';
import ReportLineChart from '../components/ReportLineChart/ReportLineChart';
import ActivityFeed from '../components/ActivityFeed/ActivityFeed';
import MessageFeed from '../components/MessageFeed/MessageFeed';
import TaskFeed from '../components/TaskFeed/TaskFeed';

class Home extends Component {
  //TODO: DRY - group tasksProps, messagesProps, activitiesProps 
  //and treat all of them the same with generic components & functions

  //TODO: DRY - merge ChartCard and ListCard into one base component

  render() {
    const { currentUserPhoto,
      currentUserName,
      pageHomeData,
      sidebarVisible,
      toggleSidebarVisibility } = this.props;

    const headerMainProps = { currentUserPhoto, sidebarVisible, toggleSidebarVisibility };
    const sidebarMenuProps = { sidebarVisible, activeItem: this.constructor.name };
    const welcomeGreet = `Hello ${currentUserName}`;

    const salesPieChartProps = pageHomeData.sales;
    const reportLineChartProps = pageHomeData.report;

    const tasksProps = pageHomeData.tasks;
    tasksProps['type'] = TaskFeed;

    const messagesProps = pageHomeData.messages;
    messagesProps['type'] = MessageFeed;

    const activitiesProps = pageHomeData.activities;
    activitiesProps['type'] = ActivityFeed;

    return (
      <SidebarMenu {...sidebarMenuProps}>
        <HeaderMain {...headerMainProps} />
        <Header 
          as='h2' 
          attached='top' 
          className='page-home__welcome-greet-header'
          >
          {welcomeGreet}
        </Header>
        <Grid 
          as={Segment} 
          attached='bottom' 
          columns='equal' 
          className='page-home__cards-grid'
        >
          <Grid.Row style={{ height: '40%' }}>
            <Grid.Column width={7}>
              <ChartCard title='Your Sales'>
                <SalesPieChart {...salesPieChartProps} />
              </ChartCard>
            </Grid.Column>
            <Grid.Column>
              <ChartCard title='Report'>
                <ReportLineChart {...reportLineChartProps} />
              </ChartCard>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row style={{ height: '60%' }}>
            <Grid.Column>
              <ListCard title='Tasks'
                {...tasksProps}>
              </ListCard>
            </Grid.Column>
            <Grid.Column>
              <ListCard title='Messages'
                {...messagesProps}>
              </ListCard>
            </Grid.Column>
            <Grid.Column>
              <ListCard title='Activity'
                {...activitiesProps}>
              </ListCard>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </SidebarMenu>
    );
  }
}

export default Home;


