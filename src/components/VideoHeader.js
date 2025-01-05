import React from 'react';
import { Layout } from "antd";
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
        <h1 className="header-text">Jon Simpson</h1>
        <br></br>
        <hr></hr>
        <br></br>
        <h2 className="header-text">Software Manager, World Traveler, Animal Lover.</h2>
        <h4 className="header-text"><i>When I'm not writing code I morph into a yogi</i></h4>
      </div>
     
    </Content>
  );
}
