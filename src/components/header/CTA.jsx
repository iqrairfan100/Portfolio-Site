import React from 'react'
import CV from '../../assets/Irfan_Iqra Resume 11_08_25.pdf'
const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn btn-primary'>Download Resume</a>
        <a href= "#contact" className= 'btn btn-primary'>Let's Work Together!</a>
    </div>
  )
}

export default CTA
