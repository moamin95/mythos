import React from 'react';
import './SplashModal.scss';

const SplashModal = (props) => {
  return (
    <div class='splashmodal-container'>
      <button
        class='close-button'
        onClick={() => {
          props.checkModal();
        }}
      >
        x
      </button>
      <div class='header'>
        <h1>The non-traditional newsletter for non-traditional watchers!</h1>
      </div>
      <div class='subheading'>
        <p>
          Signup for our amazing newsletter to get the latest news, updates and
          amazing offers delivered directly to your inbox.
        </p>
      </div>
      <div class='email-input'>
        <input type='text' placeholder='email'></input>
        <button class='subscribe-button'>Join us</button>
      </div>
    </div>
  );
};

export default SplashModal;
