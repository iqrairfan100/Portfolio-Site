import React from 'react'
import './Header.css'
import CTA from './CTA.jsx'
import Me from '../../assets/me.png'
import HeaderSocials from './HeaderSocials.jsx'
const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h3>Hey! Nice to meet you, I'm</h3>
        <h1>Iqra Irfan</h1>
        <h3 className="text-new" >Entry Level Fullstack Engineer </h3>
        <CTA />
        <HeaderSocials />

        <div className='me'>
          <img src={Me} alt="me"/>

        </div>

        <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header