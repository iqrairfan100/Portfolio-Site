import React from 'react'
import './Header.css'
import CTA from './CTA.jsx'
import Me1 from '../../assets/menew5.png'
import HeaderSocials from './HeaderSocials.jsx'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import flower from '../../assets/petal.png'
import { useEffect } from 'react'


const Header = () => {
  useEffect(() => {
    const text = document.querySelector('.text p');
    text.innerHTML = text.innerText
      .split('')
      .map((char, i) => `<span style="transform:rotate(${i * 6.9}deg)">${char}</span>`)
      .join('');
  }, []);

  return (
    <header>
      <div className="container header_container">
        <div className="header_content">
          <h2>Hey, Welcome to my Portfolio Site,</h2>
          <h1>Iqra Irfan</h1>
          <h2 className="text-light">Full Stack Software Engineer </h2>
        </div>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <div className="circle">
            <div className="text">
              <p> ✿ ✿ ✿ ✿ ✿ ✿ ✿ ✿ ✿ ✿ ✿ ✿ ✿ ✿ ✿ ✿ ✿ ✿ ✿ ✿ ✿ ✿ ✿ ✿ ✿ ✿ </p>
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