/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { Chart, Interval, Tooltip } from 'bizcharts';
import { Card, Menu, Dropdown } from 'antd';

const menu = (
  <Menu>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.alipay.com/"
      >
        X
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.taobao.com/"
      >
        Y
      </a>
    </Menu.Item>
  </Menu>
);

function ProductBarChart(props) {
  const barChartData = props.barChartData.items;
  return (
    <Card bordered={false}>
      <Dropdown overlay={menu}>
        <a
          className="ant-dropdown-link"
          onClick={e => e.preventDefault()}
          style={{
            paddingLeft: '320px',
          }}
        >
          Filter
        </a>
      </Dropdown>
      ,
      <Chart
        height={250}
        autoFit
        data={barChartData}
        interactions={['active-region']}
      >
        <Interval position="x*y" />
        <Tooltip shared />
      </Chart>
    </Card>
  );
}

export default ProductBarChart;
