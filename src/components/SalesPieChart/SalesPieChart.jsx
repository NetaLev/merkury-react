import React, { Component } from 'react'
import { ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';
import './SalesPieChart.css';

class SalesPieChart extends Component {
  render() {
    const data = [{ name: 'Group A', value: 400 }, { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 }, { name: 'Group D', value: 200 }];
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
    //const RADIAN = Math.PI / 180;
    const legendStyle = {
      left: '65%'
    };

    return (
      <ResponsiveContainer width="110%" height="90%">
        {/* TODO: custom outer responsive legend */}
        <PieChart >
          <Pie dataKey='value' cx='35%'
            data={data}
            innerRadius={'35%'}
            outerRadius={'75%'}
          >
            {/* TODO: change key */}
            {
              data.map((entry, index) => <Cell key={index} fill={COLORS[index % COLORS.length]} />)
            }
          </Pie>
          <Legend layout='vertical' verticalAlign='middle' wrapperStyle={legendStyle} />
        </PieChart>
      </ResponsiveContainer>

    )
  }
}

export default SalesPieChart