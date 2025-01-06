import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import { Layout, Popover, Typography } from 'antd';
import '../App.css';


const { Content } = Layout;
const { Title } = Typography;


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
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const experiences = [
    {
      date: '2024 - 2024',
      title: 'Solution Manager',
      subtitle: 'Jitterbit | Remote',
      description: 'Solution Architecture, Client Relationship Management, Pre-Sales Expertise, Cross-Functional Team Leadership, Project Management',
      type: 'work', icon: <FaBriefcase />,
      logo: '/assets/companies/jitterbit-logo.png',
      icons: []
    },
    {
      date: '2023 - 2024',
      title: 'Application Architect',
      subtitle: 'Jitterbit | Remote',
      description: 'System Architecture Design, Integration Expertise, End-to-End Solution Development, Leadership and Mentoring, Technical Strategy and Planning',
      type: 'work', icon: <FaBriefcase />, logo: '/assets/companies/jitterbit-logo.png',
      icons: []
    },
    {
      date: '2020 - 2022',
      title: 'Senior Application Developer',
      subtitle: 'Zudy | Remote',
      description: 'Full-Stack Development, Low-Code Platform Development, JavaScript Frameworks, Database Design and Integration, Agile Methodologies',
      type: 'work',
      icon: <FaBriefcase />,
      logo: '/assets/companies/zudy-logo.png',
      icons: ['/assets/technologies/sql.png', '/assets/technologies/csharp.webp', '/assets/technologies/javascript.png', '/assets/technologies/react.png', '/assets/technologies/html.png', '/assets/technologies/css.svg', '/assets/technologies/crystalreports.png',]
    },
    {
      date: '2019 - 2020',
      title: 'Software Developer',
      subtitle: 'The 5th Ingredient | San Diego, CA',
      description: 'Developed software for managing beer and kombucha brewery processes using the LAMP stack (PHP, MySQL, JavaScript, HTML, CSS) on the CodeIgniter framework.',
      type: 'work',
      icon: <FaBriefcase />,
      logo: '/assets/companies/5th-ingredient-logo.png',
      icons: ['/assets/technologies/codeigniter.svg', '/assets/technologies/mysql.png', '/assets/technologies/php.png', '/assets/technologies/jquery.png', '/assets/technologies/html.png', '/assets/technologies/css.svg', '/assets/technologies/git.png',]
    },
    {
      date: '2019 - 2019',
      title: 'Software Developer Intern',
      subtitle: 'EMOTIV | San Diego, CA',
      description: 'Developed a Spotify playlist application that dynamically added or removed songs in real time based on brainwave data from an EEG headset and user performance metrics.',
      type: 'work', icon: <FaBriefcase />,
      logo: '/assets/companies/emotiv-logo.png',
      icons: ['/assets/technologies/spotify.png', '/assets/technologies/react.png', '/assets/technologies/python.png', '/assets/technologies/docker.webp', '/assets/technologies/d3.png',]
    },
    {
      date: '2018 - 2018',
      title: 'Full-Stack Development Bootcamp',
      subtitle: 'LEARN Academy | San Diego, CA',
      description: 'Teaching Assistant for the Jumpstart Program, where I taught students foundational front-end web development concepts using JavaScript, HTML, and CSS in 3-day intensive courses',
      type: 'education',
      icon: <FaGraduationCap />,
      logo: '/assets/companies/learn-academy-logo.jpeg',
      icons: ['/assets/technologies/postgresql.png', '/assets/technologies/Rails.png', '/assets/technologies/ruby.png', '/assets/technologies/javascript.png', '/assets/technologies/react.png', '/assets/technologies/html.png', '/assets/technologies/css.svg'],
    },
    {
      date: '2014 - 2018',
      title: 'Working Holiday Visa',
      subtitle: 'Seeka Limited | Australia & New Zealand',
      description: 'Leadership and Management, Team Collaboration, Multitasking and Adaptability, Cultural Sensitivity and Communication',
      type: 'work',
      icon: <FaBriefcase />,
      logo: '/assets/companies/seeka-logo.avif',
      icons: []
    },
    {
      date: '2012',
      title: 'Universidad Latina de Costa Rica',
      subtitle: 'Heredia, Costa Rica',
      description: 'Spanish, International Business Management',
      type: 'education', icon: <FaGraduationCap />,
      logo: '/assets/companies/ulatina-logo.png',
      icons: []
    },
    {
      date: '2009 - 2014',
      title: 'Graduated from the University of Kentucky',
      subtitle: 'Lexington, KY',
      description: 'B.S. in Economics and International Business',
      type: 'education',
      icon: <FaGraduationCap />,
      logo: '/assets/companies/uk-logo.png',
      icons: []
    },
  ];

  const technologyNames = {
    '/assets/technologies/sql.png': 'SQL',
    '/assets/technologies/csharp.webp': 'C#',
    '/assets/technologies/javascript.png': 'JavaScript',
    '/assets/technologies/react.png': 'React',
    '/assets/technologies/html.png': 'HTML',
    '/assets/technologies/css.svg': 'CSS',
    '/assets/technologies/crystalreports.png': 'Crystal Reports',
    '/assets/technologies/codeigniter.svg': 'CodeIgniter',
    '/assets/technologies/mysql.png': 'MySQL',
    '/assets/technologies/php.png': 'PHP',
    '/assets/technologies/jquery.png': 'jQuery',
    '/assets/technologies/git.png': 'Git',
    '/assets/technologies/spotify.png': 'Spotify API',
    '/assets/technologies/python.png': 'Python',
    '/assets/technologies/docker.webp': 'Docker',
    '/assets/technologies/d3.png': 'D3.js',
    '/assets/technologies/postgresql.png': 'PostgreSQL',
    '/assets/technologies/Rails.png': 'Ruby on Rails',
    '/assets/technologies/ruby.png': 'Ruby',
  };

  return (
    <Content style={{ paddingBottom: '20px' }}>
      <Title align="center" className="timeline-title" style={{ fontSize: '22px' }}>Work &amp; Education</Title>

      <VerticalTimeline animate layout="2-columns" lineColor="rgb(33, 150, 243)">
        {experiences.map((exp, index) => (
          <div
            key={index}
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
              <p className="vertical-timeline-desc">{exp.description}</p>

              <br />

              {hoveredIndex === index && (
                <div style={{ display: 'flex', marginTop: '10px', gap: '8px', justifyContent: 'flex-start' }}>
                  {exp.icons.map((icon, idx) => (
                    <Popover
                      key={idx}
                      content={technologyNames[icon] || 'Unknown Technology'}
                      trigger="click"
                    >
                      <img
                        src={icon}
                        style={{ width: '40px', height: '40px', objectFit: 'contain', cursor: 'pointer' }}
                        alt={`icon-${idx}`}
                      />
                    </Popover>
                  ))}
                </div>
              )}
            </VerticalTimelineElement>
          </div>
        ))}
      </VerticalTimeline>
    </Content>
  );
}
