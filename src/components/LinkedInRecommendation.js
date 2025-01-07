import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Card,
  Layout,
  Typography,
  // Space
} from 'antd';
import { FaLinkedinIn } from 'react-icons/fa';
import {
  EffectCoverflow,
  Pagination,
  Mousewheel
} from 'swiper/modules';
import '../App.css';



const { Content } = Layout;
const { Title } = Typography;
const { Meta } = Card;

const LinkedInRecommendations = () => {

  const recommendations = [
    {
      name: 'Theresa Mann',
      role: 'Manager of Master Data and Inventory at Darn Tough Vermont',
      recommendation: 'I had the pleasure of working with Jon on a Vinyl app development project. He learned our complex process quickly and developed an app to support the requirements, going above and beyond to meet our deadlines. In meetings Jon was professional and on task while being personable and "fun" to talk with, taking the time to explain how the system worked and truly understanding the business need. I hope we cross paths again in the future!',
      avatar: '/assets/recommenders/theresa_mann.jpeg',
      linkedin: 'https://www.linkedin.com/in/theresa-mann-419a2a21/'
    },
    {
      name: 'Tracy Dunsdon',
      role: 'Retired',
      recommendation: 'Jon, while working at Zudy/Jitterbit, worked as part of my team, providing consulting services. He was a developer on a number of our Vinyl applications. Right out of the gate, Jon became part of the team. He helped us develop complex applications. He offered guidance and mentoring to other team members. Jon was a valuable addition to our organization, and I believe he would provide the same level of professionalism and positive effect for any organization.',
      avatar: '/assets/recommenders/tracy.jpeg',
      linkedin: 'https://www.linkedin.com/in/tracy-dunsdon-6835b0/'
    },
    {
      name: 'Geoff Howski',
      role: 'Sr. Solution Architect & Delivery Lead at Jitterbit',
      recommendation: 'I’ve had the pleasure of working with Jon on a handful of different projects at both Jitterbit and Zudy (Jitterbit acquired Zudy). I was impressed with Jon’s hard-working, positive attitude from day one. He has always maintained a goal-oriented mindset; one which was always in service of meeting deadlines on (or under) budget. I also found communication with Jon to be fluid. He’s very personable. I have no doubt that Jon will continue his ability to make a tangible impact and add real value to the business for which he works next. ',
      avatar: '/assets/recommenders/geoff.jpeg',
      linkedin: 'https://www.linkedin.com/in/geoffreyhowski/'
    },
    {
      name: 'Isaac Meisner',
      role: 'Solutions Architect at Syniti',
      recommendation: 'I had the pleasure of working with Jon for a year on a project where we developed enhancements and provided support on a web application for major retail client. Together, we gathered requirements and tackled the implementation in our low-code platform. The tasks consisted of developing complex SQL rules in order to integrate with their external systems, and Jon consistently and successfully executed on the features and testing he was assigned. His dedication was clear in our frequent client meetings, where we would dive into testing, iterate on our logic, and play back the functionality in demos. Jon is a reliable team player with a commitment to delivering results.',
      avatar: '/assets/recommenders/isaac.jpeg',
      linkedin: 'https://www.linkedin.com/in/isaacjm/'
    },
    {
      name: 'Austin Williams',
      role: 'Solution Architect at Jitterbit',
      recommendation: 'I first worked with Jon when he was brought on to my project in 2022. He was able to quickly learn our customer\'s business process and jump right into development of enhancements to the application. He has always been eager to learn and take on new challenges. I later became his mentor in 2023 and saw Jon grow as a consultant as he polished both his soft skills and technical savviness developing complex business applications. Jon led requirements meetings with managers and executives in a variety of industries including manufacturing, healthcare, retail, and pharmaceuticals and oversaw end to end development and deployment of their solutions. This breadth of experience uniquely positions him to succeed in any software engineering role.',
      avatar: '/assets/recommenders/austin.jpeg',
      linkedin: 'https://www.linkedin.com/in/georgeaustinwilliams/'
    },
    {
      name: 'Matthew Bosworth',
      role: 'Director, Cloud Native Applications at Caylent',
      recommendation: 'Jon is a worldly, driven, enthusiastic individual. I had the pleasure of mentoring him during the last few weeks of his LEARN Academy internship. Jon decided to dive into server-side coding and quickly built a REST API, set up a database, and had the whole thing running in docker containers. His technical growth over a short period of time, coupled with his friendly, outgoing attitude and seemingly endless supply of travel tales makes him a delight to work with.',
      avatar: '/assets/recommenders/matt.jpeg',
      linkedin: 'https://www.linkedin.com/in/mattbo/'
    },
    {
      name: 'Matt Clark',
      role: 'Director of Engineering at Branding Brand',
      recommendation: 'I\'ve gotten to know Jon as he\'s gone through the Learn Academy program, and his journey is especially inspiring. He\'s a smart, quick thinker, and solid junior developer, but what stands out about Jon is his grit. I saw his determination first hand as life outside of Learn threw him some real curveballs and he persevered, turning setback into advantage. Jon\'s grit and technical skill are a powerful combination.',
      avatar: '/assets/recommenders/mattc.jpeg',
      linkedin: 'https://www.linkedin.com/in/leadprogrammer/'
    },
  ];

  return (

    <Content style={{ paddingBottom: '20px', paddingTop: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        <Title
          className="linkedin-title"
          style={{ fontSize: '22px' }}
        >
          What People Are Saying
        </Title>
      </div>

      <Swiper
        slidesPerView="auto"
        spaceBetween={150}  // Space between the cards
        loop={true}
        autoplay={{
          delay: 3000,  // Set the autoplay delay to 3 seconds
          disableOnInteraction: false,  // Keep autoplay even if user interacts
        }}
        speed={1500}  // Slow movement speed of the slides
        pagination={true}  // Remove pagination (bottom bar)
        navigation={false}  // Remove navigation arrows
        style={{
          display: 'flex',
          gap: '20px',
          paddingBottom: '10px',
          paddingLeft: '10px',
          paddingRight: '10px',
        }}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        mousewheel={true}
        modules={[Pagination, EffectCoverflow, Mousewheel]}
      >
        {recommendations.map((rec, idx) => (
          <SwiperSlide key={idx} style={{ width: '400px', minWidth: '390px' }}>
            <Card
              hoverable
              style={{
                textAlign: 'center',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                borderRadius: '10px',
                position: 'relative',  // To position the LinkedIn icon in the top right
              }}
            >
              <a
                href='https://www.linkedin.com/in/jonbsimp/details/recommendations/?detailScreenTabIndex=0'
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  marginBottom: '20px', // Add space below the icon
                }}
              >
                <FaLinkedinIn style={{ color: '#0072b1', fontSize: '24px' }} />
              </a>

              <Meta
                title={rec.name}
                description={<span style={{ color: '#0077b5' }}>{rec.role}</span>}
              />
              <p style={{ fontFamily: 'Coda' }}>{rec.recommendation}</p>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </Content>


  );
};

export default LinkedInRecommendations;
