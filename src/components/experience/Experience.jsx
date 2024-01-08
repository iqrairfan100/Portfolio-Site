import React from 'react'
import './Experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
const Experience = () => {
  return (
    <section id = 'experience'>
         <center>
         <h3> What Skills Do I Have?</h3>
         <h2 className='text-light'> My Experience</h2>
         </center>

      <div className= 'container experience_container'>
          <div className="experience_frontend">
            <h3> Frontend Development</h3>
            <div className="experience_content">
              <article className='experience_details'>
                <BsPatchCheckFill className='experience_details-icon'/>
                <div>
                   <h4 className='text-normal'> JavaScript </h4>
                   <small className='text-light'> Experienced </small>
                </div>
              </article>
              <article className='experience_details'>
                <BsPatchCheckFill className='experience_details-icon'/>
                <div>
                   <h4 className='text-normal'>TypeScript</h4>
                   <small className='text-light'> Experienced </small>
                </div>
              </article>
              <article className='experience_details'>
                <BsPatchCheckFill className='experience_details-icon'/>
                <div>
                   <h4 className='text-normal'> ReactJS </h4>
                   <small className='text-light'> Experienced </small>
                </div>
              </article>
              <article className='experience_details'>
                <BsPatchCheckFill className='experience_details-icon'/>
                <div>
                  <h4 className=' text-normal'> React Native</h4>
                  <small className='text-light'> Experienced </small>
                </div>
              </article>
              <article className='experience_details'>
                <BsPatchCheckFill className='experience_details-icon'/>
                <div>
                   <h4 className='text-normal'> Swift </h4>
                   <small className='text-light'> Intermediate </small>
                </div>
              </article>
              <article className='experience_details'>
                <BsPatchCheckFill className='experience_details-icon'/>
                <div>
                   <h4 className='text-normal'> Objective-C </h4>
                   <small className='text-light'> Intermediate </small>
                </div>
              </article>
            
            </div>
          </div>

          <div className="experience_backend">
            <h3 className=' text-normal'> Backend and Database Development</h3>
            <div className="experience_content">
            <article className='experience_details'>
                <BsPatchCheckFill className='experience_details-icon'/>
                <div>
                   <h4 className='text-normal'> Java </h4>
                   <small className='text-light'> Experienced </small>
                </div>
              </article>
            <article className='experience_details'>
                <BsPatchCheckFill className='experience_details-icon'/>
                <div>
                   <h4 className='text-normal'> MongoDB </h4>
                   <small className='text-light'> Experienced </small>
                </div>
              </article>
          
              <article className='experience_details'>
                <BsPatchCheckFill className='experience_details-icon'/>
                <div>
                   <h4 className='text-normal'> Firebase </h4>
                   <small className='text-light'> Experienced </small>
                </div>
              </article>
           
              <article className='experience_details'>
                <BsPatchCheckFill className='experience_details-icon'/>
                <div>
                   <h4 className='text-normal'> MySQL </h4>
                   <small className='text-light'> Experienced </small>
                </div>
              </article>
              <article className='experience_details'>
                <BsPatchCheckFill className='experience_details-icon'/>
                <div>
                   <h4 className='text-normal'> Python </h4>
                   <small className='text-light'> Intermediate </small>
                </div>
              </article>
              <article className='experience_details'>
                <BsPatchCheckFill className='experience_details-icon'/>
                <div>
                   <h4 className='text-normal'>AWS</h4>
                   <small className='text-light'> Intermediate </small>
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