/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Interaction, PieChart } from 'bizcharts';
import { Card } from 'antd';

function ProductPieChart(props) {
  const pieChartData = props.pieChartData.items;
  console.log(pieChartData);
  return (
    <Card bordered={false}>
      <PieChart
        forceFit
        height={250}
        data={pieChartData}
        radius={0.8}
        angleField="value"
        colorField="type"
        label={{
          visible: true,
          type: 'outer',
          offset: 20,
          formatter: val => `${val}%`,
        }}
      >
        <Interaction type="element-single-selected" />
      </PieChart>
    </Card>
  );
}

export default ProductPieChart;
