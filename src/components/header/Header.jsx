import React, { useEffect } from 'react';
import './Header.css';
import CTA from './CTA.jsx';
import Me1 from '../../assets/menew5.png';
import HeaderSocials from './HeaderSocials.jsx';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // ✅ ensure Bootstrap is available

const Header = () => {
  useEffect(() => {
    const text = document.querySelector('.text p');
    text.innerHTML = text.innerText
      .split('')
      .map((char, i) => `<span style="transform:rotate(${i * 6.9}deg)">${char}</span>`)
      .join('');
  }, []);

  return (
    <header className="header-section">
      <div className="container text-center header_container">
        <div className="header_content">
          <h2>Hey! Welcome to my Portfolio Site, I'm</h2>
          <h1>Iqra Irfan</h1>
          <h2 className="text-light">Full Stack Software and Data Engineer</h2>
        </div>

        <CTA />
        <HeaderSocials />

        <div className="me mx-auto">
          <div className="circle d-flex justify-content-center align-items-center">
            <div className="white-circle"></div>
            <div className="text">
              <p>....................................................</p>
            </div>
            <LazyLoadImage alt="me" src={Me1} effect="blur" className="me-image" />
          </div>
        </div>

        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
