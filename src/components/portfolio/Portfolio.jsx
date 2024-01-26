import React, { useState } from 'react';
import './Portfolio.css'
import IMG2 from '../../assets/sharebearlogotrans1.png'
import IMG3 from '../../assets/musicplayer.PNG'
import IMG4 from '../../assets/globehealth.png'
import YouTube from 'react-youtube';

const Portfolio = () => {
  const sharebearID = 'BcYewLpEktg';
  const globehealthID = 'RVZp1UzzNzE';

  return (
    <section id='portfolio'>
      <center>
       
        <h3> My Recent Work</h3>
        <h2 className='text-light'> Portfolio</h2>
      
        <div className='container portfolio_container'>
          <article className='portfolio_item'>
            <center>
           
              <div className='content-wrapper'>

                <div className='video-1'>
                  <YouTube
                    videoId={globehealthID}
                    opts={{ width: '100%', height: '700px' }}
                  />
                </div>
                <div className='text-block-1'>
                <h3 className='text-new' style={{ color: 'black'}} >
                Project 1: Globe Health Clinic React Native Mobile App
              </h3>
                  <p className='video-description'>
                  Leveraging React Native, the Globe Health Clinic app seamlessly operates on both IOS and Android platforms, offering a user-friendly interface for efficient appointment management and access to valuable information. The application's foundation lies in Firebase as the primary database and provides login functionality, complemented by the integration of external APIs like SendGrid and Zapier, ensuring a secure flow of information to the clinic's appointment management system.

This project not only highlights my expertise in app development and UI/UX design on Figma but also emphasizes my commitment to data security. Effectively managing sensitive user information within the database showcases my dedication to implementing robust security measures, rounding out my skill set for tackling diverse challenges in software engineering.                 
                 </p>

              <a
                href='https://gitfront.io/r/iqrairfan100/3Gk5RSX2hCfX/GlobeHealth/'
                className='btn btn-primary'
                style={{ color: 'black', marginRight: '30px' }}
              >
               View Limited Public Repository 
              </a>
              <a
               a href= "#contact"
                className='btn btn-primary'
                style={{ color: 'black' }}
              >
              Request Access for Full GitHub Repository
              </a>
                </div>
              </div>

            </center>
          </article>
          <article className='portfolio_item'>
            <center>
            <div className='content-wrapper'>
        
              <div className= 'video-2'>
              <YouTube
                  videoId={sharebearID} 
                  opts={{ width: '100%', height: '700px' }}
                />
                </div>
                <div className='text-block-1'>
                <h3 className='text-new' style={{ color: 'black'}}>
                Project 2: Share Bear React Native Mobile App
              </h3>
                  <p className='video-description'>
                  Created to address the needs of UCLA students, ShareBear provides a streamlined platform for trading and borrowing items effortlessly. As a former UCLA student who lived in the dorms, I often found myself in situations where I needed an item temporarily but lacked the funds to purchase it. Many students resorted to using group chats for listing items, resulting in disorganization and lost information within the text stream. ShareBear emerged as a solution to this challenge.

Developed using Swift, ShareBear is optimized for IOS, leveraging Firebase for database management and login functionalities. The application's design, crafted in Figma, allowed me to infuse my personality through carefully chosen colors and a distinctive logo. ShareBear showcases my proficiency in addressing day-to-day problems, UI/UX design, and overall app development.                 </p>
                 <a
                href='https://gitfront.io/r/iqrairfan100/YG6wq25wkfpo/ShareBear/'
                className='btn btn-primary'
                style={{ color: 'black', marginRight: '30px' }}
              >
               View Limited Public Repository 
              </a>
              <a
               a href= "#contact"
                className='btn btn-primary'
                style={{ color: 'black' }}
              >
              Request Access for Full GitHub Repository
              </a>
              </div>
              </div>
          
           
            </center>
          </article>
        </div>
        <h1 className='text-trans'> .......... </h1>
        <h1 className='text-trans'> .......... </h1>
      </center>
    </section>
  );
};

export default Portfolio;