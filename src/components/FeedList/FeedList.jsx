import React, { Component } from 'react'
import './FeedList.css';

class FeedList extends Component {

  render() {
    const { data, type, wrapper } = this.props;
    const ComponentTag = type;
    const ComponentWrapper = wrapper;

    return (
      <React.Fragment> {/* TODO: check why this project's babel does not support the new <></> fragment syntax */}
        {data.map((feedData, index) =>
          <ComponentWrapper key={feedData.key}>
            <ComponentTag {...feedData} /> {/*INFO: unique keys are passed from fake data*/}
          </ComponentWrapper>
        )}
      </React.Fragment>
    )
  }
}

export default FeedList






