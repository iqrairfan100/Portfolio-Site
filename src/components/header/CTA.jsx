import React from 'react'
import CV from '../../assets/_Irfan_Iqra Resume Janurary 16th 2024 updated.docx.pdf'
const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn btn-primary'>Download Resume</a>
        <a href= "#contact" className= 'btn btn-primary'>Let's Work Together!</a>
    </div>
  )
}

export default CTA
