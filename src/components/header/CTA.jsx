import React from 'react'
import CV from '../../assets/Iqra_Irfan_Resume_05_09_2026.pdf'
const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn btn-primary'>Download Resume</a>
        <a href= "#contact" className= 'btn btn-primary'>Let's Work Together!</a>
    </div>
  )
}

export default CTA
