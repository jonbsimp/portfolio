import React from 'react';
import '../App.css'; // Add your custom CSS styles

export default function Contact() {
    return (
        <div className="contact">
            <h2>Contact</h2>
            <p>Let’s build something great together! Reach out to me:</p>
            <form>
                <label>
                    Name:
                    <input type="text" name="name" />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" />
                </label>
                <label>
                    Message:
                    <textarea name="message"></textarea>
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}