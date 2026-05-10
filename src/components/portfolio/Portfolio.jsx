import React from 'react';
import './Portfolio.css';
import YouTube from 'react-youtube';
import IMGPostgres from '../../assets/postgres_project.png';
import IMGResearch from '../../assets/usc_research.png';

const Portfolio = () => {
  const sharebearID = 'BcYewLpEktg';
  const globehealthID = 'RVZp1UzzNzE';

  return (
    <section id="portfolio">
      <div className="portfolio-header">
        <center>
          <h3>My Recent Work</h3>
          <h2>Portfolio</h2>
        </center>
        <p className="portfolio_intro">
          A selection of full-stack applications, data engineering systems, and research projects 
          that reflect my experience across software development, machine learning, and intelligent automation.
        </p>
      </div>

      <div className="container portfolio_container">

        {/* ===== Project 1 - PostgreSQL Reinforcement Learning Optimizer ===== */}
        <article className="portfolio_item">
          <div className="content-wrapper">
            <img src={IMGPostgres} alt="PostgreSQL RL Optimizer" className="portfolio-image" />
            <div className="text-block">
              <h3 className="project-title white-title">
                Reinforcement Learning for Join Order Optimization in PostgreSQL
              </h3>
              <p>
                Built a Deep Q-Learning agent to optimize query join orders in PostgreSQL, 
                replacing the default dynamic programming optimizer for complex analytical workloads. 
                Benchmarked performance on TPC-H datasets, achieving measurable efficiency gains. 
                Integrated Python (PyTorch, Gym) with PostgreSQL internals for hybrid learning-based query planning.
              </p>
              <div className="project-links">
                <a href="#contact" className="pf-btn">Request Code Access</a>
              </div>
            </div>
          </div>
        </article>

        {/* ===== Project 2 - USC Research ===== */}
        <article className="portfolio_item">
          <div className="content-wrapper">
            <img src={IMGResearch} alt="USC Robotics Research" className="portfolio-image" />
            <div className="text-block">
              <h3 className="project-title white-title">
                USC Modular & Adaptive Systems Lab – AI Robotics Research
              </h3>
              <p>
                Conducting research in the Modular & Adaptive Systems Lab at USC, 
                focusing on integrating reinforcement learning algorithms into robotic control systems 
                for adaptive motion and environment-aware responses. 
                Collaborating on sensor integration, real-time learning, and modular control frameworks 
                using Python, ROS, and simulation environments.
              </p>
              <div className="project-links">
                <a href="#contact" className="pf-btn">Learn More</a>
              </div>
            </div>
          </div>
        </article>

        {/* ===== Project 3 - Globe Health ===== */}
        <article className="portfolio_item">
          <div className="content-wrapper">
            <div className="video">
              <YouTube videoId={globehealthID} opts={{ width: '100%', height: '700px' }} />
            </div>
            <div className="text-block">
              <h3 className="project-title white-title">
                Globe Health Clinic React Native Mobile App
              </h3>
              <p>
                Developed a cross-platform React Native app (iOS + Android) to streamline appointment scheduling 
                and clinic communication. Integrated Firebase for authentication and data storage, 
                SendGrid/Zapier for secure email automation, and custom UI designs via Figma. 
                Focused on performance, patient data security, and accessibility.
              </p>
              <div className="project-links">
                <a 
                  href="https://gitfront.io/r/iqrairfan100/3Gk5RSX2hCfX/GlobeHealth/" 
                  className="pf-btn" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  View Limited Repository
                </a>
                <a href="#contact" className="pf-btn-secondary">
                  Request Full Access
                </a>
              </div>
            </div>
          </div>
        </article>

        {/* ===== Project 4 - Share Bear ===== */}
        <article className="portfolio_item">
          <div className="content-wrapper">
            <div className="video">
              <YouTube videoId={sharebearID} opts={{ width: '100%', height: '700px' }} />
            </div>
            <div className="text-block">
              <h3 className="project-title white-title">ShareBear iOS App</h3>
              <p>
                Designed and developed ShareBear to help UCLA students exchange and borrow items easily. 
                Built with Swift and Firebase for real-time updates and authentication, 
                and designed a polished interface in Figma. 
                The app addresses everyday needs with an intuitive and community-driven design.
              </p>
              <div className="project-links">
                <a 
                  href="https://gitfront.io/r/iqrairfan100/YG6wq25wkfpo/ShareBear/" 
                  className="pf-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Limited Repository
                </a>
                <a href="#contact" className="pf-btn-secondary">
                  Request Full Access
                </a>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
