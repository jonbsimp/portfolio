import React from 'react';
import '../App.css'; // Add your custom CSS styles

export default function Portfolio() {
        return (
            <div className="portfolio">
                <h2>Portfolio</h2>
                <p>Here are some of the projects I've worked on:</p>
                <ul>
                    <li>
                        <h4>Forecasting Application for a Fortune 500 Company</h4>
                        <h4>Improved headcount predictions for a healthcare and retail giant.</h4>
                        <h4>Flagship Applications for Major Sports Teams</h4>
                        <h4>Streamlined operational workflows and enhanced user experience.</h4>
                        <h4>Legacy Database Migration</h4>
                        <h4>Optimized data accessibility and reporting for a retail giant.</h4>
                    </li>
                </ul>
            </div>
        );
    }