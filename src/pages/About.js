import React from 'react';
import '../App.css'; 

import { Layout, Card, Row, Col, Space } from "antd";
const { Content } = Layout;

export default function About() {
    return (
        <Content className="about">
            <Card hoverable>
                <Row gutter={[8, 8]} align="middle"> {/* Reduced gutter to bring elements closer */}
                    {/* Left Column for Image */}
                    <Col xs={24} sm={10} md={10} style={{ textAlign: 'center', paddingLeft: '10px'}}>
                        <img 
                            src="/assets/peru.jpg"  // Replace with your image path
                            alt="About Me"
                            style={{
                                width: '100%',
                                maxWidth: '250px',  // Smaller width for image
                                height: 'auto',
                                borderRadius: '10px',
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',  // Optional: Adds shadow around the image
                            }}
                        />
                    </Col>

                    {/* Right Column for Text */}
                    <Col xs={24} sm={12} md={12} style={{ textAlign: 'left' }}>
                        <div>
                            <h3>
                                I am a seasoned software development leader and solution architect with extensive experience in delivering tailored
                                solutions across healthcare, retail, sports, and manufacturing. I specialize in low-code development, database
                                management, and full-stack architecture, working with global teams to achieve business goals.
                            </h3>
                            <h3>
                                Beyond my career, I’ve spent years traveling the globe, connecting with different cultures, and pursuing my
                                passions for surfing, snowboarding, and yoga. This adventurous spirit fuels my creativity, adaptability, and ability
                                to think outside the box — qualities that I bring to every professional project.
                            </h3>
                        </div>
                    </Col>
                </Row>
            </Card>
        </Content>
    );
}
