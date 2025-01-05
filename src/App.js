import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Timeline from './pages/Timeline';
import { Layout } from "antd";
import VideoHeader from './components/VideoHeader';
import About from './pages/About';
import CustomFooter from './components/CustomFooter';
import LinkedInRecommendation from './components/LinkedInRecommendation';
// import Portfolio from './pages/Portfolio';

const { Content } = Layout;

function App() {
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Navbar />
            <VideoHeader />
            <Content>
                <About />
                <Timeline />
                <LinkedInRecommendation />
            </Content>
            <CustomFooter />
        </Layout>
    );
}

export default App;
