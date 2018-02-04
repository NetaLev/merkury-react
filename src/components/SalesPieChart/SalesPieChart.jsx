import React, { Component } from 'react'
import { ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';
import './SalesPieChart.css';

class SalesPieChart extends Component {
  render() {
    const { data } = this.props;
    const COLORS = ['#0088fe', '#00c49f', '#ffbb28', '#ff8042', '#da4f4f']; // TODO: when styling, use theme color variables instead of hardcoded colors
    //const RADIAN = Math.PI / 180;
    const legendStyle = {
      left: '65%'
    };

    return (
      <ResponsiveContainer width="110%" height="90%">
        {/* TODO: change to custom outer responsive legend */}
        <PieChart >
          <Pie
            data={data}
            dataKey='value'
            cx='35%'
            innerRadius={'35%'}
            outerRadius={'75%'}
          >
            {
              data.map((entry, index) =>
                <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />
              )
            }
          </Pie>
          <Legend layout='vertical' verticalAlign='middle' wrapperStyle={legendStyle} />
        </PieChart>
      </ResponsiveContainer>

    )
  }
}

export default SalesPieChart