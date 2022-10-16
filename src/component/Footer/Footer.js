import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <div class='footer-main'>
      <div class='footer-inner'>
        <div class='first'>
          <h1>Mythos</h1>
        </div>
        <div class='second'>
          <a href='/'>Social</a>
          <div class='links'>
            <p>Facebook</p>
            <p>Instagram</p>
            <p>LinkedIn</p>
          </div>
        </div>
        <div class='third'>
          <a href=''>Careers</a>
          <div class='links'>
            <p>Join us</p>
            <p>Legal</p>
            <p>Careers Portal</p>
          </div>
        </div>
        <div class='fourth'>
          <a href=''>About</a>
          <div class='links'>
            <p>Facebook</p>
            <p>Instagram</p>
            <p>LinkedIn</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
