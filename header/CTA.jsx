import React from 'react'
import CV from '../../assets/Irfan_Iqra Resume 2022 Entry-Level SWE.png'
const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download Resume</a>
        <a hreg="#contact" className= 'btn btn-prime'>Let's Chat!</a>
    </div>
  )
}

export default CTA
