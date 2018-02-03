import React, { Component } from 'react'
import {ResponsiveContainer, LineChart, Line, YAxis, CartesianGrid} from 'recharts';
import './ReportLineChart.css';

// TODO: find a nice and clear solution to center the line chart

class ReportLineChart extends Component {
  render() {
    const data = [
      { pv: 2400, amt: 2400 },
      { pv: 1398, amt: 2210 },
      { pv: 9800, amt: 2290 },
      { pv: 3908, amt: 2000 },
      { pv: 4800, amt: 2181 },
      { pv: 3800, amt: 2500 },
      { pv: 4300, amt: 2100 },
    ];

    return (
      <ResponsiveContainer width="100%" height="80%">
        {/* width={600} height={300} 
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
         */}
        <LineChart 
        data={data}>
          <YAxis />
          <CartesianGrid  />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={4} />
        </LineChart>
      </ResponsiveContainer>
    )
  }
}

export default ReportLineChart
