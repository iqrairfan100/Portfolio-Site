import React from 'react'
import './Experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
const Experience = () => {
  return (
    <section id = 'experience'>
         <center>
         <h3> What Skills Do I Have?</h3>
         <h2 className='text-new'> My Experience</h2>
         </center>

      <div className='container experience_container'>
          <div className="experience_frontend">
            <h3> Frontend Development</h3>
            <div className="experience_content">
              <article className='experience_details'>
                <BsPatchCheckFill className='experience_details-icon'/>
                <div>
                   <h4 className='text-new'> HTML </h4>
                   <small className='text-light'> Experienced </small>
                </div>
              </article>
              <article className='experience_details'>
                <BsPatchCheckFill className='experience_details-icon'/>
                <div>
                  <h4 className='text-new'> CSS </h4>
                  <small className='text-light'> Experienced </small>
                </div>
              </article>
              <article className='experience_details'>
                <BsPatchCheckFill className='experience_details-icon'/>
                <div>
                   <h4 className='text-new'> ReactJS </h4>
                   <small className='text-light'> Experienced </small>
                </div>
              </article>
              <article className='experience_details'>
                <BsPatchCheckFill className='experience_details-icon'/>
                <div>
                   <h4 className='text-new'>Javascript </h4>
                   <small className='text-light'> Intermediate </small>
                </div>
              </article>
            </div>
          </div>

          <div className="experience_backend">
            <h3 className='text-new'> Backend Development</h3>
            <div className="experience_content">
            <article className='experience_details'>
                <BsPatchCheckFill className='experience_details-icon'/>
                <div>
                   <h4 className='text-new'> Python </h4>
                   <small className='text-light'> Experienced </small>
                </div>
              </article>
              <article className='experience_details'>
                <BsPatchCheckFill className='experience_details-icon'/>
                <div>
                   <h4 className='text-new'> NodeJS </h4>
                   <small className='text-light'> Intermediate </small>
                </div>
              </article>
              <article className='experience_details'>
                <BsPatchCheckFill className='experience_details-icon'/>
                <div>
                   <h4 className='text-new'> MySQL </h4>
                   <small className='text-light'> Intermediate </small>
                </div>
              </article>
              <article className='experience_details'>
                <BsPatchCheckFill className='experience_details-icon'/>
                <div>
                   <h4 className='text-new'> And much more coming soon... </h4>
                </div>
              </article>
            </div>
          </div>
        </div>
        <h1 className='text-trans' > ..........  </h1>
      <h1 className='text-trans'> ..........  </h1>
    </section>
  )

}

export default Experience