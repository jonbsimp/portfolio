import React from 'react';
import { Layout } from "antd";
import '../App.css';
import { FaReact } from "react-icons/fa";
import { AiOutlineAntDesign } from "react-icons/ai";



const { Footer } = Layout;

export default function CustomFooter() {
  return (
    <Footer className="footer">
      <div className="footer-content">
        <p className="footer-text">© 2025 Jon Simpson. All rights reserved.</p>
        {/* <p className="footer-text">React | Ant Design</p> */}
        {/* <div className="footer-socials">
          <a href="https://github.com/jonbsimp" target="_blank" rel="noopener noreferrer" className="footer-link">GitHub</a>
          <a href="https://linkedin.com/in/jonbsimp" target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn</a>
        </div> */}
      </div>
      <div>
        <p><FaReact /> <AiOutlineAntDesign /></p>
        <p className="footer-text">React & Ant Design</p>
      </div>
    </Footer>
  );
}
