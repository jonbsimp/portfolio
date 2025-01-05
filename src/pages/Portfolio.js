import React from 'react';
import { Carousel, Card, Col, Row, Layout } from 'antd';
// import { AppstoreAddOutlined, GithubOutlined, FileTextOutlined } from '@ant-design/icons';
const { Content } = Layout;

const { Meta } = Card;

const projectData = [
  {
    industry: 'Tech',
    title: 'Project 1 - Tech Industry',
    description: 'A software solution for a major tech company.',
    // icon: <AppstoreAddOutlined />,
  },
  {
    industry: 'Retail',
    title: 'Project 2 - Retail Industry',
    description: 'A retail management platform for inventory control.',
    // icon: <GithubOutlined />,
  },
  {
    industry: 'Healthcare',
    title: 'Project 3 - Healthcare Industry',
    description: 'An application for managing patient records and appointments.',
    // icon: <FileTextOutlined />,
  },
  {
    industry: 'Finance',
    title: 'Project 4 - Finance Industry',
    description: 'A financial tracking application for clients.',
    // icon: <AppstoreAddOutlined />,
  },
  {
    industry: 'Education',
    title: 'Project 5 - Education Industry',
    description: 'An e-learning platform for remote education.',
    // icon: <GithubOutlined />,
  },
  {
    industry: 'Manufacturing',
    title: 'Project 6 - Manufacturing Industry',
    description: 'A supply chain management system for manufacturers.',
    // icon: <FileTextOutlined />,
  },
];

const Portfolio = () => {
  return (
    <Content>
    <div style={{ padding: '30px', backgroundColor: '#f7f7f7' }}>
      {/* <h2 style={{ textAlign: 'center' }}>Industry-Specific Projects</h2> */}
      <Carousel
        autoplay
        dotPosition="bottom"
        slidesToShow={3} // Show 3 cards per slide
        arrows={true}    // Enable left and right arrows
        style={{ maxWidth: '90%', margin: '0 auto' }} // Center the carousel
      >
        {projectData.map((project, index) => (
          <div key={index}>
            <Row justify="center" gutter={16}>
              <Col span={7}> {/* Adjust width to fit 3 items */}
                <Card
                  hoverable
                  cover={project.icon}
                  bordered={false}
                >
                  <Meta title={project.title} description={project.description} />
                </Card>
              </Col>
            </Row>
          </div>
        ))}
      </Carousel>
    </div>
    </Content>
  );
};

export default Portfolio;
