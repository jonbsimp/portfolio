import React, { useState } from 'react';
import '../App.css'; 
import { Layout, Card, Row, Col, Modal } from "antd";

const { Content } = Layout;

export default function About() {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [modalImage, setModalImage] = useState('');

    const showModal = (imageSrc) => {
        setModalImage(imageSrc);
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <Content className="about">
            <Card hoverable>
                <Row gutter={[8, 8]} align="middle">
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
                                cursor: 'pointer',
                            }}
                            onClick={() => showModal('/assets/peru.jpg')} // Click handler to open modal
                        />
                    </Col>

                    {/* Right Column for Text */}
                    <Col xs={24} sm={12} md={12} style={{ textAlign: 'left' }}>
                        <div>
                            <h2>A little bit about me...</h2>
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

            {/* Modal for enlarged image */}
            <Modal
                visible={isModalVisible}
                onCancel={handleCancel}
                footer={null}
                centered
                width="80%"
            >
                <img src={modalImage} alt="Enlarged" style={{ width: '100%' }} />
            </Modal>
        </Content>
    );
}
