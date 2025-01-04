// Import necessary libraries
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'; // Add your custom CSS styles
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Lifestyle from './pages/Lifestyle';
import Contact from './pages/Contact';

// Components
// function Header() {
//     return (
//         <header className="header">
//             <h1>Jon Simpson</h1>
//             <p>Software Architect | Problem-Solver | Global Adventurer</p>
//             <nav>
//                 <ul>
//                     <li><Link to="/">Home</Link></li>
//                     <li><Link to="/about">About Me</Link></li>
//                     <li><Link to="/portfolio">Portfolio</Link></li>
//                     <li><Link to="/lifestyle">Lifestyle</Link></li>
//                     <li><Link to="/contact">Contact</Link></li>
//                 </ul>
//             </nav>
//         </header>
//     );
// }

// function Home() {
//     return (
//         <div className="home">
//             <h2>Hi, I'm Jon Simpson</h2>
//             <p>Building innovative software solutions while exploring the world one wave, mountain, and yoga mat at a time.</p>
//             <div className="cta-buttons">
//                 <Link to="/portfolio" className="cta">View My Work</Link>
//                 <Link to="/contact" className="cta">Get in Touch</Link>
//             </div>
//         </div>
//     );
// }

// function About() {
//     return (
//         <div className="about">
//             <h2>About Me</h2>
//             <p>
//                 I am a seasoned software development leader and solution architect with extensive experience in delivering tailored
//                 solutions across healthcare, retail, sports, and manufacturing. I specialize in low-code development, database
//                 management, and full-stack architecture, working with global teams to achieve business goals.
//             </p>
//             <p>
//                 Beyond my career, I’ve spent years traveling the globe, connecting with different cultures, and pursuing my
//                 passions for surfing, snowboarding, and yoga. This adventurous spirit fuels my creativity, adaptability, and ability
//                 to think outside the box — qualities that I bring to every professional project.
//             </p>
//         </div>
//     );
// }

// function Portfolio() {
//     return (
//         <div className="portfolio">
//             <h2>Portfolio</h2>
//             <p>Here are some of the projects I've worked on:</p>
//             <ul>
//                 <li>
//                     <h3>Forecasting Application for a Fortune 500 Company</h3>
//                     <p>Improved headcount predictions for a healthcare and retail giant.</p>
//                 </li>
//                 <li>
//                     <h3>Flagship Applications for Major Sports Teams</h3>
//                     <p>Streamlined operational workflows and enhanced user experience.</p>
//                 </li>
//                 <li>
//                     <h3>Legacy Database Migration</h3>
//                     <p>Optimized data accessibility and reporting for a retail giant.</p>
//                 </li>
//             </ul>
//         </div>
//     );
// }

// function Lifestyle() {
//     return (
//         <div className="lifestyle">
//             <h2>Lifestyle</h2>
//             <p>Adventures Beyond the Code:</p>
//             <ul>
//                 <li>Surfing around the world, chasing the perfect wave.</li>
//                 <li>Snowboarding across breathtaking alpine landscapes.</li>
//                 <li>Practicing yoga to maintain focus, creativity, and balance.</li>
//             </ul>
//         </div>
//     );
// }

// function Contact() {
//     return (
//         <div className="contact">
//             <h2>Contact</h2>
//             <p>Let’s build something great together! Reach out to me:</p>
//             <form>
//                 <label>
//                     Name:
//                     <input type="text" name="name" />
//                 </label>
//                 <label>
//                     Email:
//                     <input type="email" name="email" />
//                 </label>
//                 <label>
//                     Message:
//                     <textarea name="message"></textarea>
//                 </label>
//                 <button type="submit">Submit</button>
//             </form>
//         </div>
//     );
// }

// function Footer() {
//     return (
//         <footer className="footer">
//             <p>© 2025 Jon Simpson. All rights reserved.</p>
//         </footer>
//     );
// }

// App Component
function App() {
    return (
        <Router>
            <div className="app">
                <Header />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/portfolio" element={<Portfolio />} />
                        <Route path="/lifestyle" element={<Lifestyle />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
