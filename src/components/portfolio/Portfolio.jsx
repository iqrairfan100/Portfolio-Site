import React from 'react'
import './Portfolio.css'
import IMG from '../../assets/imgcode.jpg'
import IMG2 from '../../assets/sharebearlogotrans1.png'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <center>
      <h3> My Recent Work</h3>
      <h2 className='text-light'> Portfolio</h2>


      <div className= "container portfolio_container">
          <article className='portfolio_item'>
            <center>
              <div className= "portfolio_item-image">
                <img src={IMG} alt =""/>
              </div>
              <h3 className='text-new'h1 style={{color:'white'}}> Project 1: Personal Portfolio Site </h3>
              <a href="https://github.com/iqrairfan100/Portfolio-Site" className='btn btn-primary' h1 style={{color:'black'}}> Github Source Code</a>
            </center>
          </article>
          <article className='portfolio_item'>
            <center>
              <div className='portfolio_item-image1'>
              <img src={IMG2} alt = ""/>
              </div>
              <h3 className='text-new'h1 style={{color:'white'}}> Project 2: ShareBear IOS App</h3>
              <a href="https://github.com/iqrairfan100/ShareBear" className='btn btn-primary' h1 style={{color:'black'}}> Github Source Code</a>
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