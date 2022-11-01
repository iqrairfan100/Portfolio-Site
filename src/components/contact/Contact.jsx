import React from 'react'
import './Contact.css'
import {BsPatchCheck} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_l4007wm', 'template_475hzsc', form.current, '8vEjVf0hEZuwtbi9M')

    e.target.reset()
  };

  return (
     <section id='contact'>
      <h4 className='text-normal'> Want to talk more?</h4>
      <h2 className="text-light">Contact Me!</h2>

      <div className="container contact_container">
          <article className="contact_option">
            <BsPatchCheck className='contact_option-icon'/>
            <h4 className= 'text-normal'> Email: </h4>
            <h5 className= 'text-normal'>iqrairfan100@gmail.com</h5>
            <a href="mailto:iqrairfan100@gmail.com" target="_blank" className='text-light'>Send a message!</a>
          </article>
        </div>
        <div>
        <form action=""></form>
        </div>
      <div>
       <form ref={form} onSubmit={sendEmail}>
        <input type= "text" name='name' placeholder="Your Full Name" required/>
        <input type="email" name='email' placeholder='Your Email' required />
        <textarea name="message" rows="7" placeholder ='Your Message' requied ></textarea>
        <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact