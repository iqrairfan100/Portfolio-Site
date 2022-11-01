import React from 'react'
import './Nav.css'
import {RiHomeHeartLine} from 'react-icons/ri'
import {MdOutlineMessage} from 'react-icons/md'
import {BiBookHeart} from 'react-icons/bi'
import {FaCat} from 'react-icons/fa'
import {useState} from 'react'
import {RiLightbulbLine} from'react-icons/ri'

const Nav = () => {
  const {activeNav, setActiveNav} = useState('#')
  return (
    <nav>
      <a href="#" className={activeNav=== "#" ? 'active' : ''}><RiHomeHeartLine/></a>
      <a href="#about" onClick={()=> setActiveNav ('#about')} className={activeNav === '#about' ? 'active' : ''}><FaCat/></a>
      <a href="#experience" onClick={()=> setActiveNav ('#experience')} className={activeNav == '#experience' ? 'active' :''}><RiLightbulbLine/></a>
      <a href="#portfolio" onClick={()=> setActiveNav ('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><BiBookHeart/></a>
      <a href="#contact" onClick={()=> setActiveNav ('#contact')} className={activeNav === '#contact' ? 'active' : ''}><MdOutlineMessage/></a>
    </nav>
  )
}

export default Nav