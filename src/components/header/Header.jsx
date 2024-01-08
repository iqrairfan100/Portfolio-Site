import React from 'react'
import './Header.css'
import CTA from './CTA.jsx'
import Me1 from '../../assets/menew5.png'
import HeaderSocials from './HeaderSocials.jsx'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import flower from '../../assets/portfolio-flower.png'
const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h2>Hey! Welcome to my portfolio site, I'm</h2>
        <h1>Iqra Irfan</h1>
        <h2 className="text-light" >Full Stack Software Engineer </h2>
        <CTA />
        <HeaderSocials />

        <div className='me'>
          
        <div className="flower-container">
          <LazyLoadImage
            alt="flower"
            src={flower}
            effect="blur"
            className="flower-image"
          />
        </div>

        <LazyLoadImage
          alt="me"
          src={Me1}
          effect="blur"
          className="me-image"
          
        />
      </div>

      <a href="#contact" className='scroll_down'>Scroll Down</a>
    </div>
    </header>
  )
}

export default Header