import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Timeline from './pages/Timeline';
import Portfolio from './pages/Portfolio';  // Ensure you import the Portfolio component
import { Layout, Menu } from 'antd';
import { FaUser, FaBriefcase, FaRegCalendarAlt, FaHome } from 'react-icons/fa';  // Importing React Icons
import { TbTimeline } from "react-icons/tb";
import VideoHeader from './components/VideoHeader';
import About from './pages/About';
import CustomFooter from './components/CustomFooter';
import LinkedInRecommendation from './components/LinkedInRecommendation';
import Calendly from './components/Calendly';
import { GoCodeReview } from "react-icons/go";

const { Content, Sider } = Layout;

function App() {
    return (
        <Layout style={{ minHeight: '100vh' }}>
            {/* Sidebar */}
            <Sider width={80} className="site-layout-background" style={{ position: 'sticky', top: 0, height: '100vh', zIndex: 100 }}>
                <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    style={{
                        height: '100%',
                        borderRight: 0,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                    }}
                >
                    <Menu.Item key="1" icon={<FaHome size={24} />} style={{ marginBottom: '20px' }}>
                        <a href="#home" aria-label="Go to Home Section"></a>
                    </Menu.Item>
                    <Menu.Item key="2" icon={<FaUser size={24} />} style={{ marginBottom: '20px' }}>
                        <a href="#about" aria-label="Go to About Section"></a>
                    </Menu.Item>
                    <Menu.Item key="3" icon={<FaBriefcase size={24} />} style={{ marginBottom: '20px' }}>
                        <a href="#portfolio" aria-label="Go to Portfolio Section"></a>
                    </Menu.Item>
                    <Menu.Item key="4" icon={<TbTimeline size={24} />} style={{ marginBottom: '20px' }}>
                        <a href="#timeline" aria-label="Go to Timeline Section"></a>
                    </Menu.Item>
                    <Menu.Item key="5" icon={<GoCodeReview size={24} />} style={{ marginBottom: '20px' }}>
                        <a href="#linkedin-recommendation" aria-label="Go to LinkedIn Review Section"></a>
                    </Menu.Item>
                    <Menu.Item key="6" icon={<FaRegCalendarAlt size={24} />} style={{ marginBottom: '20px' }}>
                        <a href="#calendar" aria-label="Go to Calendar Section"></a>
                    </Menu.Item>
                </Menu>
            </Sider>

            {/* Main Content */}
            <Layout style={{ paddingLeft: 0 }}>
                <Navbar />
                <div id="home">
                    <VideoHeader />
                </div>
                <Content style={{ padding: '20px' }}>
                    <div id="about">
                        <About />
                    </div>
                    <div id="portfolio">
                        <Portfolio /> {/* Add the Portfolio component here */}
                    </div>
                    <div id="timeline">
                        <Timeline />
                    </div>
                    <br></br>
                    <br></br>
                    <div id="linkedin-recommendation">
                        <LinkedInRecommendation />
                    </div>
                    <div id="calendar">
                        <Calendly />
                    </div>
                </Content>
                <CustomFooter />
            </Layout>
        </Layout>
    );
}

export default App;
