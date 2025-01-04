import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Timeline from './pages/Timeline';
import { Layout } from "antd";
import VideoHeader from './components/VideoHeader';
import About from './pages/About';

const { Content } = Layout;

function App() {
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Navbar />

                <VideoHeader />
                <Content>
                    <About />
                    <Timeline />
                </Content>
        </Layout>
    );
}

export default App;
