import React from 'react'
import './Portfolio.css'
import IMG from '../../assets/imgcode.jpg'
import IMG2 from '../../assets/sharebearlogotrans1.png'
import IMG3 from '../../assets/musicplayer.PNG'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <center>
      <h3> My Recent Work</h3>
      <h2 className='text-light'> Portfolio</h2>


      <div className= "container portfolio_container">
      <article className='portfolio_item'>
            <center>
              <div className='portfolio_item-image1'>
              <img src={IMG2} alt = ""/>
              </div>
              <h3 className='text-new'h1 style={{color:'white'}}> Project 1: ShareBear Swift IOS App </h3>
              <a href="https://github.com/iqrairfan100/ShareBear" className='btn btn-primary' h1 style={{color:'black'}}> Github Source Code</a>
            </center>
          </article>
          <article className='portfolio_item'>
            <center>
              <div className= "portfolio_item-image2">
                <img src={IMG3} className="IMG3" alt="" />
              </div>
              <h3 className='text-new'h1 style={{color:'white'}}> Project 2: Mock Music Player Mobile App </h3>
              <a href="https://github.com/iqrairfan100/MusicPlayer" className='btn btn-primary' h1 style={{color:'black'}}> Github Source Code</a>
            </center>
          </article>
          <article className='portfolio_item'>
            <center>
              <div className= "portfolio_item-image">
                <img src={IMG} className="IMG" alt="" />
              </div>
              <h3 className='text-new' h1 style={{color:'white'}}> Project 3: Personal Portfolio ReactJS Site </h3>
              <a href="https://github.com/iqrairfan100/Portfolio-Site" className='btn btn-primary' h1 style={{color:'black'}}> Github Source Code</a>
            </center>
          </article>
        </div>
      <h1 className='text-trans' > ..........  </h1>
      <h1 className='text-trans'> ..........  </h1>
      </center>
    </section>
  )
}

export default Portfolio