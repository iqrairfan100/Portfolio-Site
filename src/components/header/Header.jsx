import React from 'react'
import './Header.css'
import CTA from './CTA.jsx'
import Me1 from '../../assets/menew5.png'
import HeaderSocials from './HeaderSocials.jsx'
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
          <img src={Me1} alt="me"/>

        </div>

        <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header