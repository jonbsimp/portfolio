import { useRef, React } from 'react';
import {
  Card,
  Typography,
  Divider,
  Layout,
  // Row, 
  // Col 
} from 'antd';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, Mousewheel, Keyboard } from 'swiper/modules'; // Import Pagination module from swiper
import '../App.css';

const { Title, Paragraph } = Typography;
const { Content } = Layout;

const caseStudies = [
  {
    title: "Global Inventory Management Platform",
    description: "Developed a scalable solution for a global manufacturing company to streamline inventory management across international locations. Integrated Snowflake and third-party APIs to enhance real-time data accuracy and implement advanced approval workflows.",
    challenges: [
      "Synchronizing large-scale data across global databases.",
      "Designing adaptable multi-level approval workflows.",
      "Integrating external APIs for seamless procurement processes.",
      "Collaborating with global stakeholders to align technical and business goals."
    ],
    myRole: "Led the end-to-end design and implementation of platform features, including backend integration and UI development.",
    roleDetails: [
      "Architected backend systems with Snowflake and API/webhook functionality.",
      "Developed dynamic UIs to facilitate inventory search and requisitions.",
      "Designed approval workflows tailored to regional policies and organizational hierarchy.",
      "Facilitated cross-team collaboration through regular global stakeholder meetings."
    ],
    keyAchievements: [
      "Reduced inventory lookup time by 50%.",
      "Delivered a scalable architecture managing tens of thousands of records.",
      "Enhanced procurement efficiency and decision-making across regions."
    ],
    technologies: ["Snowflake", "SQL", "APIs", "Webhooks", "JavaScript", "React"]
  },
  {
    title: "Innovation Platform for Large-Scale Funding",
    description: "Built a platform for a global organization to streamline funding processes for high-impact projects. Enabled efficient tracking, visualization, and team collaboration to secure critical funding.",
    challenges: [
      "Creating a user-friendly frontend aligned with complex UI/UX designs.",
      "Ensuring seamless data integration between frontend and backend.",
      "Meeting strict reliability standards for high-profile stakeholders."
    ],
    myRole: "Led frontend development to create a responsive, intuitive interface.",
    roleDetails: [
      "Designed and implemented a responsive UI using React and Ant Design.",
      "Collaborated with designers to achieve pixel-perfect interfaces.",
      "Developed APIs for seamless data exchange with SQL backends."
    ],
    keyAchievements: [
      "Delivered a high-performance platform securing millions in project funding.",
      "Enhanced data accessibility for government and enterprise users.",
      "Simplified complex workflows for improved user experiences."
    ],
    technologies: ["React", "Ant Design", "APIs", "SQL"]
  },
  {
    title: "Production Management System for Textile Manufacturing",
    description: "Created a production management app to optimize processes from raw materials to post-production audits. Integrated with enterprise systems to enable real-time updates and improve operational efficiency.",
    challenges: [
      "Managing large-scale datasets from production pipelines.",
      "Ensuring real-time integration with enterprise systems."
    ],
    myRole: "Designed and developed core application features to support dynamic updates and accurate data synchronization.",
    roleDetails: [
      "Built dynamic UIs for managing material and production updates.",
      "Designed robust SQL database structures for complex data relationships.",
      "Developed APIs to synchronize with enterprise systems and ensure accuracy."
    ],
    keyAchievements: [
      "Reduced manual update times and improved data accuracy.",
      "Delivered a scalable solution tailored to evolving production needs."
    ],
    technologies: ["SQL", "Data Lake", "Infor M3", "APIs"]
  },
  {
    title: "Talent Tracking and Reporting Platform",
    description: "Developed a system for a global healthcare organization to evaluate leadership candidates and automate workforce forecasting. Provided real-time insights and streamlined reporting processes.",
    challenges: [
      "Implementing advanced data visualizations for actionable insights.",
      "Migrating legacy data to a modern platform.",
      "Automating manual forecasting workflows."
    ],
    myRole: "Led development of dashboards and forecasting tools to improve data accessibility and efficiency.",
    roleDetails: [
      "Designed interactive dashboards with dynamic visualizations (e.g., heat maps, charts).",
      "Built forecasting tools to reduce data entry times.",
      "Mentored remote team members and ensured alignment on technical solutions."
    ],
    keyAchievements: [
      "Reduced forecasting time from weeks to days.",
      "Improved accuracy and efficiency in talent tracking and reporting."
    ],
    technologies: ["SQL", "Custom UI/UX", "Dynamic charting libraries"]
  },
  {
    title: "Game Day Volunteer Check-In System",
    description: "Developed a reliable system for a major sports organization to streamline volunteer check-ins during high-demand events, enhancing efficiency and safety.",
    challenges: [
      "Optimizing check-in processes for large-scale events.",
      "Creating a user-friendly interface for volunteer management."
    ],
    myRole: "Designed and implemented a scalable solution to manage real-time volunteer check-ins.",
    roleDetails: [
      "Developed an intuitive app to streamline volunteer management.",
      "Optimized backend systems for performance during peak usage."
    ],
    keyAchievements: [
      "Improved event efficiency and volunteer satisfaction.",
      "Enhanced safety and workflow management during large events."
    ],
    technologies: ["Custom UI", "SQL"]
  }
];


const Portfolio = () => {

  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <Content>
      <Title align="center" className="project-title" style={{ fontSize: '22px' }}>Tech Adventures</Title>
      <Swiper
        spaceBetween={30}
        slidesPerView="auto"
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 15000,
          disableOnInteraction: false,
        }}
        grabCursor={true}
        touchMoveStopPropagation={false}
        mouseDrag={true}
        pagination={{
          type: 'progressbar',
        }}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        style={{
          padding: '20px',
          maxWidth: '100%',
          margin: '0 auto',
          position: 'relative',
        }}
      >

        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>

        {caseStudies.map((caseStudy, index) => (
          <SwiperSlide key={index} style={{ display: 'flex', justifyContent: 'center' }}>
            <Card
              title={<span style={{ color: '#001628', fontFamily: '"Coda", cursive, sans-serif' }}>{caseStudy.title}</span>}
              bordered={false}
              style={{
                background: '#ffffff',
                borderRadius: '12px',
                padding: '30px',
                textAlign: 'left',
                maxWidth: '750px',
                margin: '0 auto',
                transition: 'transform 0.4s ease, box-shadow 0.4s ease',
                boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
                transform: 'scale(1)',
                animation: 'fadeIn 1s ease',
              }}
            >
              <Paragraph style={{ fontSize: '16px', fontFamily: '"Coda", sans-serif' }}>
                {caseStudy.description}
              </Paragraph>
              <Divider />
              <Title level={5} style={{ fontFamily: '"Coda", cursive, sans-serif' }}>Key Achievements:</Title>
              <ul style={{ textAlign: 'left', fontFamily: '"Coda", sans-serif' }}>
                {caseStudy.keyAchievements.map((achievement, idx) => (
                  <li key={idx} style={{ fontSize: '14px' }}>{achievement}</li>
                ))}
              </ul>
              <Title level={5} style={{ fontFamily: '"Coda", cursive, sans-serif' }}>Technologies Used:</Title>
              <Paragraph style={{ fontSize: '14px', fontFamily: '"Coda", sans-serif' }}>
                {caseStudy.technologies.join(", ")}
              </Paragraph>
            </Card>
          </SwiperSlide>
        ))}

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle className="progress-circle" cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>

      </Swiper>
    </Content>
  );
};

export default Portfolio;
