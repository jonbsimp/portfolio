import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import '../App.css'; // Add your custom CSS styles

export default function Lifestyle() {
    return (
        <div className="lifestyle">
            <h2>Lifestyle</h2>
            <p>Adventures Beyond the Code:</p>
            <ul>
                <li>Surfing around the world, chasing the perfect wave.</li>
                <li>Snowboarding across breathtaking alpine landscapes.</li>
                <li>Practicing yoga to maintain focus, creativity, and balance.</li>
            </ul>
        </div>
    );
}