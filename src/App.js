// Import necessary libraries
import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
// import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
// import About from './pages/About';
// import Portfolio from './pages/Portfolio';
// import Lifestyle from './pages/Lifestyle';
// import Contact from './pages/Contact';
import { Layout }from "antd";

const { Content } = Layout;

function App() {
    return (
        <Layout>
            <Navbar />
            <Content>
                <Home />
            </Content>

            {/* <Footer>

            </Footer> */}
            
        </Layout>


        // <Router>
        //     <div className="app">
        //         <Header />
        //         <main>
        //             <Routes>
        //                 <Route path="/" element={<Home />} />
        //                 <Route path="/about" element={<About />} />
        //                 <Route path="/portfolio" element={<Portfolio />} />
        //                 <Route path="/lifestyle" element={<Lifestyle />} />
        //                 <Route path="/contact" element={<Contact />} />
        //             </Routes>
        //         </main>
        //         <Footer />
        //     </div>
        // </Router>
    );
}

export default App;
