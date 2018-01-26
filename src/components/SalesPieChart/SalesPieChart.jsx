import React, { Component } from 'react'
import { ResponsiveContainer, PieChart, Pie, Sector, Cell, Legend } from 'recharts';
import './SalesPieChart.css';

class SalesPieChart extends Component {
  render() {
    const data = [{ name: 'Group A', value: 400 }, { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 }, { name: 'Group D', value: 200 }];
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    const RADIAN = Math.PI / 180;

    const legendStyle = {
      left: '65%'
    };

    return (
      <ResponsiveContainer width="100%" height="90%">
         <PieChart >
        <Pie cx='35%'
          data={data}
          innerRadius={40}
          outerRadius={80}
          fill="#8884d8"
        >
          {
            data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]} />)
          }
        </Pie>
        <Legend layout='vertical' verticalAlign='middle' wrapperStyle={legendStyle}/>
      </PieChart>
      
      </ResponsiveContainer>
     
    )
  }
}

export default SalesPieChart