import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import { Layout, Button } from 'antd';
import { motion } from 'framer-motion';

const { Content } = Layout;

const VerticalTimeline = ({
  animate = true,
  className = '',
  layout = '2-columns',
  lineColor = '#FFF',
  children,
}) => {
  if (typeof window === 'object') {
    document.documentElement.style.setProperty('--line-color', lineColor);
  }
  return (
    <div
      className={classNames(className, 'vertical-timeline', {
        'vertical-timeline--animate': animate,
        'vertical-timeline--two-columns': layout === '2-columns',
        'vertical-timeline--one-column-left':
          layout === '1-column' || layout === '1-column-left',
        'vertical-timeline--one-column-right': layout === '1-column-right',
      })}
    >
      {children}
    </div>
  );
};

VerticalTimeline.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  className: PropTypes.string,
  animate: PropTypes.bool,
  layout: PropTypes.oneOf([
    '1-column-left',
    '1-column',
    '2-columns',
    '1-column-right',
  ]),
  lineColor: PropTypes.string,
};

export default function Timeline() {
  const [visibleItems, setVisibleItems] = useState(2);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const experiences = [
    
    { 
      date: '2024 - 2024', 
      title: 'Solution Manager', 
      subtitle: 'Jitterbit | Remote', 
      description: 'Solution Architecture, Client Relationship Management, Pre-Sales Expertise, Cross-Functional Team Leadership, Project Management', 
      type: 'work', icon: <FaBriefcase />, 
      logo: '/assets/jitterbit-logo.png', 
      icons: [] 
    },
    { 
      date: '2023 - 2024', 
      title: 'Application Architect', 
      subtitle: 'Jitterbit | Remote', 
      description: 'System Architecture Design, Integration Expertise, End-to-End Solution Development, Leadership and Mentoring, Technical Strategy and Planning', 
      type: 'work', icon: <FaBriefcase />, logo: '/assets/jitterbit-logo.png', 
      icons: [] 
    },
    { 
      date: '2020 - 2022', 
      title: 'Senior Application Developer', 
      subtitle: 'Zudy | Remote', 
      description: 'Full-Stack Development, Low-Code Platform Development, JavaScript Frameworks, Database Design and Integration, Agile Methodologies', 
      type: 'work', 
      icon: <FaBriefcase />, 
      logo: '/assets/zudy-logo.png', 
      icons: ['/assets/sql.png', '/assets/react.png', '/assets/html.png', '/assets/css.svg', '/assets/snowflake.png',] 
    },
    { 
      date: '2019 - 2020', 
      title: 'Software Developer', 
      subtitle: 'The 5th Ingredient | San Diego, CA', 
      description: 'Developed software for managing beer and kombucha brewery processes using the LAMP stack (PHP, MySQL, JavaScript, HTML, CSS) on the CodeIgniter framework.', 
      type: 'work', 
      icon: <FaBriefcase />, 
      logo: '/assets/5th-ingredient-logo.png', 
      icons: ['/assets/codeigniter.svg', '/assets/mysql.png','/assets/php.png', '/assets/jquery.png', '/assets/html.png', '/assets/css.svg', '/assets/git.png',] 
    },
    { 
      date: '2019 - 2019', 
      title: 'Software Developer Intern', 
      subtitle: 'EMOTIV | San Diego, CA', 
      description: 'Developed a Spotify playlist application that dynamically added or removed songs in real time based on brainwave data from an EEG headset and user performance metrics.', 
      type: 'work', icon: <FaBriefcase />, 
      logo: '/assets/emotiv_logo.jpeg', 
      icons: ['/assets/spotify.png', '/assets/react.png', '/assets/python.png','/assets/docker.webp', '/assets/d3.png', '/assets/websocket.png',] 
    },
    { 
      date: '2018 - 2018', 
      title: 'Full-Stack Development Bootcamp', 
      subtitle: 'LEARN Academy | San Diego, CA', 
      description: 'Teaching Assistant for the Jumpstart Program, where I taught students foundational front-end web development concepts using JavaScript, HTML, and CSS in 3-day intensive courses', 
      type: 'education', 
      icon: <FaGraduationCap />, 
      logo: '/assets/learn-academy-logo.jpeg', 
      icons: ['/assets/postgresql.png', '/assets/Rails.png', '/assets/ruby.png', '/assets/javascript.webp', '/assets/react.png', '/assets/html.png', '/assets/css.svg'], 
    },
    { 
      date: '2014 - 2018', 
      title: 'Working Holiday Visa', 
      subtitle: 'Seeka Limited | Australia & New Zealand', 
      description: 'Leadership and Management, Team Collaboration, Multitasking and Adaptability, Cultural Sensitivity and Communication', 
      type: 'work', 
      icon: <FaBriefcase />, 
      logo: '/assets/seeka-logo.avif', 
      icons: [] 
    },
    { 
      date: '2012', 
      title: 'Universidad Latina de Costa Rica', 
      subtitle: 'Heredia, Costa Rica', 
      description: 'Spanish, International Business Management', 
      type: 'education', icon: <FaGraduationCap />, 
      logo: '/assets/ulatina-logo.png', 
      icons: [] 
    },
    { 
      date: '2009 - 2014', 
      title: 'Graduated from the University of Kentucky', 
      subtitle: 'Lexington, KY', 
      description: 'B.S. in Economics and International Business', 
      type: 'education', 
      icon: <FaGraduationCap />, 
      logo: '/assets/uk-logo.png', 
      icons: [] 
    },
  ];

  const loadMoreItems = () => {
    setVisibleItems((prevItems) => prevItems + 2);
  };

  const loadLessItems = () => {
    setVisibleItems((prevItems) => (prevItems > 2 ? prevItems - 2 : 2));
  };

  return (
    <Content>
      <VerticalTimeline animate layout="2-columns" lineColor="rgb(33, 150, 243)">
        {experiences.slice(0, visibleItems).map((exp, index) => (
          <motion.div
            key={index}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: index * 0.1 }}
            variants={{
              hidden: { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
              visible: { opacity: 1, x: 0 },
            }}
            style={{ marginBottom: '40px' }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <VerticalTimelineElement
              className={`vertical-timeline-element--${exp.type}`}
              date={exp.date}
              iconStyle={{
                background: exp.type === 'education' ? 'rgb(233, 30, 99)' : 'rgb(33, 150, 243)',
                color: '#fff',
              }}
              icon={exp.icon}
              contentStyle={{
                background: exp.type === 'education' ? 'rgb(243, 229, 245)' : 'rgb(225, 245, 254)',
                color: '#000',
              }}
              contentArrowStyle={{
                borderRight: exp.type === 'education' ? '7px solid rgb(243, 229, 245)' : '7px solid rgb(225, 245, 254)',
              }}
              position={index % 2 === 0 ? 'left' : 'right'}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <h3 className="vertical-timeline-element-title">{exp.title}</h3>
                  <h4 className="vertical-timeline-element-subtitle">{exp.subtitle}</h4>
                </div>
                {exp.logo && (
                  <img
                    src={exp.logo}
                    alt={`${exp.title} logo`}
                    style={{ width: '50px', height: '50px', objectFit: 'contain' }}
                  />
                )}
              </div>
              <p>{exp.description}</p>

              <br></br>

              {/* Display icons only on hover */}
              {hoveredIndex === index && (
                <div style={{ display: 'flex', marginTop: '10px', gap: '8px', justifyContent: 'flex-start' }}>
                  {exp.icons.map((icon, idx) => (
                    <div key={idx} style={{ fontSize: '20px', color: exp.type === 'education' ? 'rgb(233, 30, 99)' : 'rgb(33, 150, 243)' }}>
                      <img src={icon} style={{ width: '40px', height: '40px', objectFit: 'contain' }} alt={`icon-${idx}`} />
                    </div>
                  ))}
                </div>
              )}
            </VerticalTimelineElement>
          </motion.div>
        ))}
      </VerticalTimeline>

      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        {visibleItems > 2 && (
          <Button type="default" onClick={loadLessItems} style={{ marginRight: '10px', backgroundColor: 'white', borderColor: '#2096F3', color: '#2096F3' }}>
            Load Less
          </Button>
        )}
        {visibleItems < experiences.length && (
          <Button type="primary" onClick={loadMoreItems} style={{ marginRight: '10px', backgroundColor: '#2096F3', borderColor: '#2096F3', color: '#fff' }}>
            Load More
          </Button>
        )}
      </div>
    </Content>
  );
}
