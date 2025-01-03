import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; // Add your custom CSS styles

export default function Home() {
    return (
        <div className="home">
            <h2>Hi, I'm Jon Simpson</h2>
            <p>Building innovative software solutions while exploring the world one wave, mountain, and yoga mat at a time.</p>
            <div className="cta-buttons">
                <Link to="/portfolio" className="cta">View My Work</Link>
                <Link to="/contact" className="cta">Get in Touch</Link>
            </div>
        </div>
    );
}