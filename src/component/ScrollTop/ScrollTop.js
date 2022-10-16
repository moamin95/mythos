import React, { useState } from 'react';
import './ScrollTop.scss';

const ScrollTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 200) {
      setVisible(true);
    } else if (scrolled <= 200) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <button
      onClick={scrollToTop}
      class='scrollTop'
      style={{ display: visible ? 'inline' : 'none' }}
    >
      Scroll Up
    </button>
  );
};

export default ScrollTop;
