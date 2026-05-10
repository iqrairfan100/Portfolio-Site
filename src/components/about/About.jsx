import React from 'react';
import './About.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Me from '../../assets/iqraaboutme.jpg';

const About = () => {
  return (
    <section id="about" className="py-5">
      <div className="container text-center">
        {/* ======= Header ======= */}
        <div className="about-header mb-5">
          <h3>Get to Know Me</h3>
          <h2>About Iqra Irfan</h2>
        </div>

        {/* ======= About Content ======= */}
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-8 col-md-10">
            <div className="about-card mx-auto">
              <p>
                I’m Iqra Irfan, a full-stack software engineer and machine learning researcher passionate about building intelligent, human-centered systems. I hold a B.S. from UCLA and am pursuing an M.S. in Computer Science at USC.
              </p>
              <p>
                I bring over four years of experience in software analysis, automation, and mobile development—from designing cross-platform React Native applications at 7000 Languages to developing AI-powered automation systems at Cliffwater. My current research at USC’s Modular & Adaptive Systems Lab explores reinforcement learning and robotics for adaptive control.
              </p>
              <p>
                I’m excited by projects that bridge data, design, and intelligent automation—and I’m open to full-time roles and select collaborations that make technology more efficient, safe, and accessible.
              </p>

              {/* ======= Gradient Button ======= */}
              <div className="text-center mt-4">
                <a href="#contact" className="about-gradient-btn">
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
