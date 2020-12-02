/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable func-names */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card, Col, Row, Layout, Tooltip, Switch, Spin } from 'antd';
import { InfoCircleFilled, CaretUpFilled } from '@ant-design/icons';
import ChartCard from '../../component/chart/ChartCard';
import MiniArea from '../../component/chart/MiniArea';
import MiniBar from '../../component/chart/MiniBar';
import MiniProgress from '../../component/chart/MiniProgress';
import { movementSummary, visitSummary } from './Constants';
import ProductBarChart from '../../component/chart/ProductBarChart';
import ProductPieChart from '../../component/chart/ProductPieChart';
import { dataActions } from '../../redux/reducer/dataActions';

function Dashboard(props) {
  const topColResponsiveProps = {
    xs: 24,
    sm: 12,
    md: 12,
    lg: 12,
    xl: 6,
    style: { marginBottom: 24 },
  };

  const topCol1ResponsiveProps = {
    xs: 24,
    sm: 12,
    md: 12,
    lg: 12,
    xl: 6,
    style: { marginBottom: 24, paddingLeft: 850 },
  };

  const pieChartData = useSelector(state => state.pieReducer);
  const barChartData = useSelector(state => state.barReducer);
  console.log(pieChartData);
  console.log(barChartData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(dataActions.getPieChartData());
  }, [dispatch]);
  useEffect(() => {
    dispatch(dataActions.getBarChartData());
  }, [dispatch]);

  // const [pieData, setPieData] = useState(pieChartData);

  function onChange(checked) {
    console.log(`switch to ${checked}`);
  }

  return (
    <>
      <Row gutter={24} type="flex" {...topCol1ResponsiveProps}>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Col>
          <p>Night Mode</p>
        </Col>
        <Col>
          <Switch defaultChecked onChange={onChange} />
        </Col>
      </Row>
      <Row gutter={24} type="flex">
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Col {...topColResponsiveProps}>
          <ChartCard
            bordered={false}
            title="Total Items"
            action={
              <Tooltip title="Total number of items">
                <InfoCircleFilled />
              </Tooltip>
            }
            loading={false}
            total={12}
            footer={
              <>
                <span className="boldText">{13}</span> Items added in the last{' '}
                <span className="boldText">7</span> days
              </>
            }
            contentHeight={46}
          >
            <div style={{ position: 'absolute', bottom: 0, left: 0 }}>
              Weekly Changes
              <span className="trendText">{14}%</span>
              <CaretUpFilled style={{ color: '#52c41a' }} />
            </div>
          </ChartCard>
        </Col>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Col {...topColResponsiveProps}>
          <ChartCard
            bordered={false}
            title="Portal Visits"
            action={
              <Tooltip title="Total number of active users in the last month.">
                <InfoCircleFilled />
              </Tooltip>
            }
            loading={false}
            total={10}
            footer={
              <>
                <span className="boldText">{12}</span> Average daily visits per
                day
              </>
            }
            contentHeight={46}
          >
            <MiniArea color="#975FE4" data={visitSummary} />
          </ChartCard>
        </Col>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Col {...topColResponsiveProps}>
          <ChartCard
            bordered={false}
            title="Items Moved"
            action={
              <Tooltip title="Item movement in the last year.">
                <InfoCircleFilled />
              </Tooltip>
            }
            loading={false}
            total={124}
            footer={
              <>
                <span className="boldText">{123}</span> Items moved in the last
                month
              </>
            }
            contentHeight={46}
          >
            <MiniBar data={movementSummary} />
          </ChartCard>
        </Col>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Col {...topColResponsiveProps}>
          <ChartCard
            bordered={false}
            title="Item Returns"
            action={
              <Tooltip title="Percentage of returned items.">
                <InfoCircleFilled />
              </Tooltip>
            }
            loading={false}
            total={10 + ' %'}
            footer={
              <>
                <span className="boldText">{12}</span> Items in the last year
              </>
            }
            contentHeight={46}
          >
            <MiniProgress
              percent={10}
              strokeWidth={16}
              color="#13C2C2"
              target={100}
            />
          </ChartCard>
        </Col>
      </Row>
      <Row gutter={24} type="flex">
        <Col span={12}>
          <Card title="Weekly Sale Report">
            {barChartData.loading && <Spin />}
            {barChartData.items && (
              <ProductBarChart barChartData={barChartData} />
            )}
          </Card>
        </Col>
        <Col span={12}>
          <Card title="Sale Summary">
            {pieChartData.loading && <Spin />}
            {pieChartData.items && (
              <ProductPieChart pieChartData={pieChartData} />
            )}
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default Dashboard;
