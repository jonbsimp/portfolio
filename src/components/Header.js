import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; // Add your custom CSS styles

export default function Header() {
    return (
        <header className="header">
            <h1>Jon Simpson</h1>
            <p>Software Architect | Problem-Solver | Global Adventurer</p>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Me</Link></li>
                    <li><Link to="/portfolio">Portfolio</Link></li>
                    <li><Link to="/lifestyle">Lifestyle</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
}