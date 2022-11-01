import React from 'react'
import './Footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {CgWebsite} from 'react-icons/cg'

const Footer = () => {
  return (
      <footer>
        <a href ="#" className='footer_logo'></a>

        <ul className='permalinks'>
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experiences">Experiences</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        
        <div className="footer_socials">
        <a href="https://www.linkedin.com/in/iqra-irfan-005925166/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/iqrairfan100" target="_blank"><BsGithub/></a>
       <a href="https://www.pursesforapurposela.com/" target="_blank"><CgWebsite/></a>
        </div>

        <div className="footer_copyright">
          <small> &copy; Iqra Irfan Portfolio Site. All rights reserved </small>
        </div>
      </footer>
  )
}

export default Footer