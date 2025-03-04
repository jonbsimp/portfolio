import React, { useState, useEffect } from 'react';
// import 'antd/dist/antd.css'; 
import './App.css';
import { Layout, Menu } from 'antd';
import { FaUser, FaRegCalendarAlt, FaHome } from 'react-icons/fa';
import VideoHeader from './components/VideoHeader';
import About from './pages/About';



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
            <Sider
                className="custom-sidebar"
                breakpoint="lg"
                collapsedWidth="0"
                width={80}
                style={{
                    position: 'sticky',
                    top: 0,
                    height: '100vh',
                    zIndex: 100,
                    backgroundColor: '#f5f5f5',
                    
                }}
            >
                <Menu
                    mode="inline"
                    className="sidebar-nav-menu"
                    selectedKeys={[selectedKey]}
                    style={{
                        height: '100%',
                        borderRight: 0,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        backgroundColor: '#f5f5f5'
                    }}
                >
                    <Menu.Item key="1" icon={<FaHome size={24} />} style={{ marginBottom: '20px' }}>
                        <a href="#home" aria-label="Go to Home Section"></a>
                    </Menu.Item>
                    <Menu.Item key="2" icon={<FaUser size={24} />} style={{ marginBottom: '20px' }}>
                        <a href="#about" aria-label="Go to About Section"></a>
                    </Menu.Item>
            
                
                  
                    <Menu.Item key="6" icon={<FaRegCalendarAlt size={24} />} style={{ marginBottom: '20px' }}>
                        <a href="#calendar" aria-label="Go to Calendar Section"></a>
                    </Menu.Item>
                </Menu>
            </Sider>

            <Layout style={{ paddingLeft: 0 }}>
                <Navbar />
                <Content>
                    <div id="home">
                        <VideoHeader />
                    </div>
                    <div id="about">
                        <About />
                    </div>
                    <div id="calendar">
                        <Calendly />
                    </div>
                </Content>
                <CustomFooter />
            </Layout>

            <div className="bottom-navbar">
                <Menu
                    mode="horizontal"
                    selectedKeys={[selectedKey]}
                    style={{
                        display: 'flex',
                        justifyContent: 'space-around',
                        width: '100%',
                        backgroundColor: '#f5f5f5'

                    }}
                >
                    <Menu.Item key="1" icon={<FaHome size={18} />} ><a href="#home" aria-label="Go to Home Section"></a></Menu.Item>
                    <Menu.Item key="2" icon={<FaUser size={18} />} ><a href="#about" aria-label="Go to About Section"></a></Menu.Item>
                    <Menu.Item key="6" icon={<FaRegCalendarAlt size={18} />} ><a href="#calendar" aria-label="Go to Calendar Section"></a></Menu.Item>
                </Menu>
            </div>
        </Layout>
    );
}

export default App;
