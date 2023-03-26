import React from 'react'
import './About.css'
import Me from '../../assets/iqraaboutme.jpg'


const About = () => {
  return (
    <section id='about'>
      <div className= "aboutme_text">
      <center>
      <h3> Find out more about me</h3>
      <h2 className='text-light'>Who is Iqra Irfan?</h2>
      </center>
      </div>
      <div className ="container about_container">
        <div className ="about_me">
          <div className="about_me-image">
            <img id= "aboutme" src={Me} alt="about me"/>
      </div>
      </div>


      <div className='about_content'>
  <div className='about_card'>
    <p className="about-text">
      Thanks for asking! I'm Iqra, a full stack software developer and recent graduate from the University of California, Los Angeles, where I received a Bachelor of Science degree with the highest departmental honors for my major! 
      I have experience in both web and IOS app design/development on a commercial and large scale. I am available for freelance opportunities and I am also currently looking for a full-time position as a full stack software developer! Feel free to contact me below.
    </p>
    <a href="#contact" className='btn btn-primary'>Let's Chat!</a>
  </div>
</div>

      </div>
      <h1 className='text-trans' > ..........  </h1>
      <h1 className='text-trans'> ..........  </h1>
    </section>
  )
}

export default About