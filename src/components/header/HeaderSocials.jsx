import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {CgWebsite} from 'react-icons/cg'
const HeaderSocials = () => {
  return (
    <div className='header_socials'>
      <a href="https://www.linkedin.com/in/iqra-irfan-005925166/" target="_blank"><BsLinkedin/></a>
      <a href="https://github.com/iqrairfan100" target="_blank"><BsGithub/></a>
      <a href="https://www.pursesforapurposela.com/" target="_blank"><CgWebsite/></a>
    </div>
  )
}

export default HeaderSocials