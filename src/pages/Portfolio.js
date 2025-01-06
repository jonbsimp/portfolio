import { useRef, React } from 'react';
import { Card, Typography, Divider, Layout, Row, Col } from 'antd';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, Mousewheel, Keyboard } from 'swiper/modules'; // Import Pagination module from swiper
import '../App.css';

const { Title, Paragraph } = Typography;
const { Content } = Layout;

const caseStudies = [
  {
    title: "Global Inventory Management Platform",
    description: "A global manufacturing company needed a scalable solution to manage their vast inventory across multiple international locations. The goal was to provide a seamless inventory search, requisition, and approval workflow for users in the USA, France, and Germany. The platform required integration with Snowflake and third-party APIs to ensure real-time data accuracy and advanced approval logic to streamline procurement processes.",
    challenges: [
      "Handling large-scale data synchronization across global databases.",
      "Designing a complex, multi-level approval workflow adaptable to regional policies.",
      "Integrating external APIs for 'punchout' functionality when parts were unavailable in inventory.",
      "Coordinating development with diverse stakeholders, including executives and global leaders.",
    ],
    myRole: "As a Full-Stack Developer and Consultant, I led the design and implementation of critical platform features, including:",
    roleDetails: [
      "Architecting the backend to integrate Snowflake database and API/webhook functionality.",
      "Implementing dynamic UI components to display real-time inventory data and create requisitions.",
      "Designing approval workflows with complex routing logic based on organizational hierarchy and region-specific rules.",
      "Participating in bi-weekly calls with global teams to align technical progress with business requirements.",
    ],
    keyAchievements: [
      "Reduced inventory lookup time by 50% and streamlined requisition approvals.",
      "Delivered a robust, scalable architecture capable of handling tens of thousands of inventory records across regions.",
      "Improved decision-making and reduced downtime for procurement teams in multiple countries.",
    ],
    technologies: ["Snowflake", "SQL", "APIs", "Webhooks", "JavaScript", "React"],
  },
  {
    title: "Innovation Platform for Large-Scale Funding",
    description: "A global organization required an innovative platform to support funding for high-impact projects, including those tied to critical industries like national defense. The app facilitated data visualization, tracking, and communication between teams, enabling project proposals to secure funding efficiently.",
    challenges: [
      "Building a pixel-perfect, user-friendly frontend aligned with complex UI/UX designs.",
      "Integrating APIs to exchange data between the frontend and internal reporting systems.",
      "Ensuring the platform met strict performance and reliability standards for high-profile stakeholders.",
    ],
    myRole: "As the Frontend Lead Developer, I:",
    roleDetails: [
      "Designed and implemented a responsive UI in React using Ant Design.",
      "Collaborated closely with UI designers to ensure an exact match to the design specs.",
      "Developed and consumed APIs to integrate the frontend with backend SQL databases for seamless data exchange.",
    ],
    keyAchievements: [
      "Delivered a high-performance app that helped secure millions in project funding.",
      "Enhanced data accessibility for a government organization, driving efficient decision-making.",
      "Provided intuitive UX for users navigating complex workflows.",
    ],
    technologies: ["React", "Ant Design", "APIs", "SQL"],
  },
  {
    title: "Production Management System for Textile Manufacturing",
    description: "A textile manufacturer sought to streamline their production process, from raw materials to post-production audits. A key feature was enabling dynamic updates to material substitutions and program changes integrated with their enterprise system.",
    challenges: [
      "Handling large-scale datasets from production pipelines.",
      "Ensuring seamless integration with Infor M3 for real-time updates.",
    ],
    myRole: "As the Lead Developer, I:",
    roleDetails: [
      "Designed and implemented a dynamic UI for managing program updates, item conversions, and temporary substitutions.",
      "Created the SQL database structure to handle complex data relationships.",
      "Developed API logic to synchronize changes with Infor M3 and tested records in production for accuracy.",
      "Acted as the primary client contact, providing updates and leading bi-weekly demos.",
    ],
    keyAchievements: [
      "Reduced manual update time by automating workflows, improving accuracy and efficiency.",
      "Delivered a user-friendly app that scaled with production needs.",
    ],
    technologies: ["SQL", "Data Lake", "Infor M3", "APIs"],
  },
  {
    title: "Talent Tracking and Reporting Platform",
    description: "A global healthcare company required a talent tracking system to evaluate internal candidates for leadership roles. Additionally, the system needed to provide dynamic reporting on key workforce metrics.",
    challenges: [
      "Designing and implementing advanced data visualization tools for real-time insights.",
      "Managing a large-scale data migration from legacy systems to a modern platform.",
      "Automating previously manual forecasting processes for cost centers.",
    ],
    myRole: "As the Lead Developer, I:",
    roleDetails: [
      "Designed the reporting dashboard with drilldowns, filters, and dynamic charts (heat maps, pie charts, column charts).",
      "Built the forecasting app, significantly reducing the time required for headcount data entry.",
      "Conducted knowledge transfer sessions with a remote team in India, mentoring and leading daily calls.",
      "Managed production releases and support for hundreds of users.",
    ],
    keyAchievements: [
      "Reduced forecasting time from weeks to days with automated processes.",
      "Improved accuracy of talent tracking and workforce metrics.",
    ],
    technologies: ["SQL", "Custom UI/UX", "Dynamic charting libraries"],
  },
  {
    title: "Game Day Volunteer Check-In System",
    description: "A major sports organization required a fast, reliable system to check in volunteers for events. This system needed to streamline volunteer management for game days and special events.",
    challenges: [
      "Handling large-scale check-ins efficiently without bottlenecks.",
      "Creating a user-friendly interface for quick volunteer verification.",
    ],
    myRole: "As the Main Developer, I:",
    roleDetails: [
      "Designed and implemented the app to manage volunteer check-ins in real-time.",
      "Optimized the backend for scalability during high-demand events.",
    ],
    keyAchievements: [
      "Accelerated the check-in process, improving the volunteer experience.",
      "Enhanced overall event efficiency through streamlined workflows.",
    ],
    technologies: ["Custom UI", "SQL"],
  },
];

const Portfolio = () => {

  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <Content style={{ padding: '30px', backgroundColor: '#f5f5f5', paddingLeft: '150px', paddingRight: '150px' }}>
      <Row gutter={0} align="middle" style={{ margin: '0' }}>
                    {/* Left Column for Image */}
                    <Col xs={24} sm={24} md={24} style={{ textAlign: 'center', padding: '0' }}>
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
              <Paragraph style={{ fontSize: '16px', fontFamily: '"Roboto", sans-serif' }}>
                {caseStudy.description}
              </Paragraph>
              <Divider />
              <Title level={5} style={{ fontFamily: '"Coda", cursive, sans-serif' }}>Key Achievements:</Title>
              <ul style={{ textAlign: 'left', fontFamily: '"Roboto", sans-serif' }}>
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
      </Col></Row>
    </Content>
  );
};

export default Portfolio;
