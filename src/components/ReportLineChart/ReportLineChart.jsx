import React, { Component } from 'react'
import {ResponsiveContainer, LineChart, Line, YAxis, CartesianGrid} from 'recharts';
import './ReportLineChart.css';

// TODO: find a nice and clear solution to center the line chart

class ReportLineChart extends Component {
  render() {
    const { data } = this.props;

    return (
      <ResponsiveContainer width="100%" height="80%">
        <LineChart 
        data={data}>
          <YAxis />
          <CartesianGrid  />
          {/* TODO: when styling, change stroke color to theme variable color */}
          <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={4} />
        </LineChart>
      </ResponsiveContainer>
    )
  }
}

export default ReportLineChart
