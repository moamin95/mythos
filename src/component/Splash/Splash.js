import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SplashModal from './SplashModal';

import donDraper from '../../assets/images/don_draper.jpeg';

import './Splash.scss';

const Splash = (props) => {
  const [isHovering, setIsHovering] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const openModalHandler = () => {
    setModalOpen(!modalOpen);
  };

  const handleMouseOver = () => setIsHovering(true);
  const handleMouseOut = () => setIsHovering(false);

  return (
    <div class='splash'>
      <h1 class='splash-heading'>The human experience through storytelling</h1>
      <div class='splash blurb'>
        <div class='splash-subtext-left'>
          <h3 class='splash-subtext'>
            Comprehensive analysis and review of pop culture's best. Get the
            latest on upcoming movies and shows. Subscribe to our newsletter for
            daily updates and review snippets!
          </h3>
          <motion.button
            class='button primary'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => {
              openModalHandler();
              props.checkModal();
            }}
          >
            Subscribe
          </motion.button>

          <div class='author-blurb'>
            <h2>About the Author</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.{' '}
            </p>
          </div>
        </div>
        <div
          class='splash-subtext-right'
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          <h2 class='picture-heading'>Mad men; revisited</h2>
          <img src={donDraper} alt='dondraper' />
          <p class='credit'>FRANK OCKENFELS/AMC</p>
          {!isHovering && <p class='hover-subtitle'>Hover to click</p>}
          {isHovering && (
            <motion.h3
              class='picture-title'
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Don Draper
            </motion.h3>
          )}
        </div>
      </div>
    </div>
  );
};

export default Splash;
