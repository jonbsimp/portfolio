import React, { useState, useEffect } from 'react';
import './App.css';
import { Layout, Menu } from 'antd';
import { FaUser, FaBriefcase, FaRegCalendarAlt, FaHome } from 'react-icons/fa';
import { TbTimeline } from "react-icons/tb";
import { GoCodeReview } from "react-icons/go";
import VideoHeader from './components/VideoHeader';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Timeline from './pages/Timeline';
import LinkedInRecommendation from './components/LinkedInRecommendation';
import Calendly from './components/Calendly';
import Navbar from './components/Navbar';
import CustomFooter from './components/CustomFooter';


const { Content, Sider } = Layout;

function App() {
    const [selectedKey, setSelectedKey] = useState('1');

    useEffect(() => {
        const handleScroll = () => {
            const sections = [
                { id: 'home', key: '1' },
                { id: 'about', key: '2' },
                { id: 'portfolio', key: '3' },
                { id: 'timeline', key: '4' },
                { id: 'linkedin-recommendation', key: '5' },
                { id: 'calendar', key: '6' },
            ];

            const scrollPosition = window.scrollY + window.innerHeight / 3; // Adjust for better detection
            for (let i = sections.length - 1; i >= 0; i--) {
                const section = document.getElementById(sections[i].id);
                if (section && section.offsetTop <= scrollPosition) {
                    setSelectedKey(sections[i].key);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Layout style={{ minHeight: '100vh' }}>
            {/* Sidebar */}
            <Sider
                width={80}
                className="site-layout-background"
                style={{ position: 'sticky', top: 0, height: '100vh', zIndex: 100 }}
            >
                <Menu
                    mode="inline"
                    selectedKeys={[selectedKey]}
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
                <Content>
                    <div id="home">
                        <VideoHeader />
                    </div>
                    <div id="about">
                        <About />
                    </div>
                    <div id="portfolio">
                        <Portfolio />
                    </div>
                    <div id="timeline">
                        <Timeline />
                    </div>
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
