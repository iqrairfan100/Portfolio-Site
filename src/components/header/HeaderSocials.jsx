import React from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import './Header.css'; // make sure this is imported where styles are defined

const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a
        href="https://www.linkedin.com/in/iqra-irfan-005925166/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/iqrairfan100"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;
