import React, { useRef, useState } from 'react';
import './Contact.css';
import { BsPatchCheck } from 'react-icons/bs';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatusMessage('Sending...');

    emailjs
      .sendForm(
        'service_l4007wm',
        'template_475hzsc',
        form.current,
        '8vEjVf0hEZuwtbi9M'
      )
      .then(
        (result) => {
          console.log('✅ Email sent successfully:', result.text);
          setStatusMessage('Message sent successfully ✅');
          e.target.reset();
          setTimeout(() => setStatusMessage(''), 3000);
        },
        (error) => {
          console.error('❌ EmailJS error:', error);
          setStatusMessage('Something went wrong. Please try again later.');
        }
      );
  };

  return (
    <section id="contact" className="py-5">
      <div className="contact-header text-center">
        <h4 className="text-normal">Want to Talk More?</h4>
        <h2 className="text-light">Contact Me!</h2>
      </div>

      <div className="container contact_container">
        {/* ===== EMAIL INFO ===== */}
        <article className="contact_option">
          <BsPatchCheck className="contact_option-icon" />
          <h4 className="text-normal">Email Me:</h4>
          <h5 className="contact_email">iqrairfan.dev@gmail.com</h5>
        </article>

        {/* ===== CONTACT FORM ===== */}
        <form ref={form} onSubmit={sendEmail} className="contact_form mt-4">
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>

          <button type="submit" className="contact-btn">
            Send Message
          </button>

          {statusMessage && (
            <p className="status-message">{statusMessage}</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
