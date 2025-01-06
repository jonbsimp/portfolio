import React from 'react';
import { InlineWidget } from 'react-calendly';
import { Typography, Layout } from "antd";

const { Title } = Typography;
const { Content } = Layout;



const Calendly = () => {
  return (
    
    <Content style={{ paddingTop: '20px' }}>
      <Title align="center" className="calendly-title" style={{ fontSize: '22px' }}>Let's Connect</Title>
      <div style={{ height: '600px', width: '100%' }}>
        <InlineWidget url="https://calendly.com/jonbsimp" />
      </div>
    </Content>

  );
}

export default Calendly;
