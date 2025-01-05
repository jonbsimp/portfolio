import React from 'react';
import '../App.css'; 

import { Layout, Card, Space } from "antd";
const { Content } = Layout;

export default function About() {
    return (
        <Content className="about">
            <Card>
                <Space>
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
                </Space>

                <br></br>
            </Card>

        </Content>
       
    );
}