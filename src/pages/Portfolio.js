import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import '../App.css'; // Add your custom CSS styles

export default function Portfolio() {
    return (
        <div className="portfolio">
            <h2>Portfolio</h2>
            <p>Here are some of the projects I've worked on:</p>
            <ul>
                <li>
                    <p>Forecasting Application for a Fortune 500 Company</p>
                    <p>Improved headcount predictions for a healthcare and retail giant.</p>
                    <p>Flagship Applications for Major Sports Teams</p>
                    <p>Streamlined operational workflows and enhanced user experience.</p>
                    <p>Legacy Database Migration</p>
                    <p>Optimized data accessibility and reporting for a retail giant.</p>
                </li>
            </ul>
        </div>
    );
}