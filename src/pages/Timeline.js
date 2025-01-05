import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBriefcase, FaGraduationCap, FaStar } from 'react-icons/fa';
import { Layout, Button } from 'antd';
import { motion } from 'framer-motion';

const { Content } = Layout;

// VerticalTimeline Component
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
    // Initially display 2 items
    const [visibleItems, setVisibleItems] = useState(2);  

    const experiences = [
        // { date: '2025 - present', title: 'MBA Canditate', subtitle: '', description: '', type: 'education', icon: <FaGraduationCap /> },
        { date: '2024 - 2024', title: 'Solution Manager', subtitle: 'Jitterbit', description: 'Solution Architecture, Client Relationship Management, Pre-Sales Expertise, Cross-Functional Team Leadership, Project Management', type: 'work', icon: <FaBriefcase /> },
        { date: '2023 - 2024', title: 'Application Architect', subtitle: 'Jitterbit', description: 'System Architecture Design, Integration Expertise, End-to-End Solution Development, Leadership and Mentoring, Technical Strategy and Planning', type: 'work', icon: <FaBriefcase /> },
        { date: '2020 - 2022', title: 'Senior Application Developer', subtitle: 'Zudy', description: 'Full-Stack Development, Low-Code Platform Development, JavaScript Frameworks, Database Design and Integration, Agile Methodologies', type: 'work', icon: <FaBriefcase /> },
        { date: '2019 - 2020', title: 'Software Developer', subtitle: 'The 5th Ingredient', description: 'Linux, Apache, MySQL, PHP, CodeIgniter, JQuery, HTML, and CSS', type: 'work', icon: <FaBriefcase /> },
        { date: '2019 - 2019', title: 'Software Developer Intern', subtitle: 'EMOTIV | San Diego, CA', description: 'React, Django, Python, D3, WebSockets', type: 'work', icon: <FaBriefcase /> },
        { date: '2018 - 2018', title: 'LEARN Academy', subtitle: 'San Diego, CA', description: 'Full-Stack Development Bootcamp', type: 'education', icon: <FaGraduationCap /> },
        { date: '2014 - 2018', title: 'Working Holiday Visa', subtitle: 'Australia and New Zealand', description: 'Bartender in Sydney, Supervisor in Kiwi Fruit operations', type: 'work', icon: <FaBriefcase /> },
        { date: '2009 - 2014', title: 'Graduated from the University of Kentucky', subtitle: 'Lexington, KY', description: 'B.S. in Economics and International Business', type: 'education', icon: <FaGraduationCap /> },
    ];

//   const animationVariants = {
//     hidden: { opacity: 0, x: 50 },
//     visible: { opacity: 1, x: 0 },
//   };

  const loadMoreItems = () => {
    setVisibleItems((prevItems) => prevItems + 2);
  };

  const loadLessItems = () => {
    setVisibleItems((prevItems) => (prevItems > 2 ? prevItems - 2 : 2));
  };

  return (
    <Content>
      <VerticalTimeline animate layout="2-columns" lineColor="rgb(33, 150, 243)">
        {/* FaStar at the beginning */}
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          style={{ marginBottom: '40px' }}
        >
        </motion.div>

        {/* Experiences */}
        {experiences.slice(0, visibleItems).map((exp, index) => (
          <motion.div
            key={index}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, delay: index * 0.2 }}
            variants={{
              hidden: { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
              visible: { opacity: 1, x: 0 },
            }}
            style={{ marginBottom: '40px' }} // Add space between items
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
                transition: 'transform 0.3s ease',
              }}
              contentArrowStyle={{
                borderRight: exp.type === 'education' ? '7px solid rgb(243, 229, 245)' : '7px solid rgb(225, 245, 254)',
              }}
              position={index % 2 === 0 ? 'left' : 'right'} // Alternating left and right
              style={{ transition: 'transform 0.3s ease' }} // Add smooth transition for magnification
            >
              <h3 className="vertical-timeline-element-title">{exp.title}</h3>
              <h4 className="vertical-timeline-element-subtitle">{exp.subtitle}</h4>
              <p>{exp.description}</p>
            </VerticalTimelineElement>
          </motion.div>
        ))}

        <VerticalTimelineElement
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
          icon={<FaStar />}
        />
      </VerticalTimeline>

      {/* Buttons for Load More and Load Less */}
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
