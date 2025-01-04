import React from 'react';
// import { Link } from 'react-router-dom';
import '../App.css'; 

import { Layout, Menu }from "antd";

const { Header } = Layout;



export default function Navbar() {
    return (
       <Header>
           <Menu theme="dark">
             Jon Simpson
           </Menu>

           <video
          src="/assets/peru.mov"
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
            zIndex: -1, // Puts the video behind other content
            // transform: 'scale(0.9)', // Zoom out the video by 10%
            // transformOrigin: 'center center', // Ensure the video scales from the center
          }}
        />


         {/* <div style={{ position: 'relative', zIndex: 1, color: '#fff', padding: '20px' }}>
          <h1>Welcome to My Website</h1>
          <p>Enjoy the background video!</p>
        </div> */}

       </Header>
    );
}