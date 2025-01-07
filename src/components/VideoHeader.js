import React from 'react';
import { Layout } from "antd";
import { AiOutlineMail, AiOutlineDownload } from "react-icons/ai"; // Import the email and download icons
import '../App.css';  // Ensure the CSS file is linked properly

const { Content } = Layout;

export default function VideoHeader() {
  return (
    <Content style={{ position: 'relative', padding: 0, height: '80vh', overflow: 'hidden' }}>
      <video
        src="/assets/peru.mov" // Ensure the video path is correct
        type="video/mp4"
        autoPlay
        loop
        muted
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover', // Makes the video cover the entire header area
          zIndex: 0, // Ensures the video stays behind the content
          pointerEvents: 'none', // Prevents video from being clickable
        }}
      />
      {/* Adding an overlay for the video to darken it */}
      <div className="video-overlay"></div>

      <div className="header-overlay">
        <h1 className="header-text">JON SIMPSON</h1>
        <br></br>
        <hr></hr>
        <br></br>
        <h2 className="header-text">Software Manager, World Traveler, Animal Lover.</h2>
        <h4 className="header-text"><i>When I'm not writing code I morph into a yogi</i></h4>

        {/* Icons for Email and Resume Download */}
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          {/* Email Icon */}
          <a
            href="mailto:jonbsimp@gmail.com"
            style={{
              color: 'white',
              textDecoration: 'none',
              fontSize: '24px',
              marginRight: '15px',
            }}
          >
            <AiOutlineMail style={{ verticalAlign: 'middle', fontSize: '2rem' }} />
          </a>
          {/* Download Icon */}
          <a
            href="/assets/Jon_Simpson_Resume.pdf" // Replace with the correct path to your resume
            download="Jon_Simpson_Resume.pdf" // Sets the download file name
            style={{
              color: 'white',
              textDecoration: 'none',
              fontSize: '24px',
            }}
          >
            <AiOutlineDownload style={{ verticalAlign: 'middle', fontSize: '2rem' }} />
          </a>
        </div>
      </div>
    </Content>
  );
}
