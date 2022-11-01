import React from 'react'
import CV from '../../assets/_Irfan_Iqra Resume Winter 2022 new.pdf'
const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn btn-primary'>Download Resume</a>
        <a href= "#contact" className= 'btn btn-primary'>Let's Chat!</a>
    </div>
  )
}

export default CTA
