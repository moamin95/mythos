import React from 'react';
import { motion } from 'framer-motion';

import './Navbar.scss';

const Navbar = () => {
  const ContainerVariants = {
    initial: {},
    animate: {},
  };
  const buttonVariants = {
    initial: { scale: 0.7 },
    animate: { scale: 1.2 },
    transition: {
      type: 'tween',
      duration: '1',
      delay: '1',
    },
  };

  return (
    <div class='nav'>
      <div class='nav main'>
        {/* <h1>MYTHOS</h1> */}
        <motion.h1
          animate={{ x: [5, 10, 5], opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 0.3,
            ease: [0.5, 0.71, 1, 1.5],
          }}
          initial={{ opacity: 0, scale: 0.5 }}
          whileHover={{ scale: 1.1 }}
        >
          MM.
        </motion.h1>
      </div>
      <div class='nav secondary'></div>
      <motion.div
        class='nav secondary'
        variants={ContainerVariants}
        initial='initial'
        animate='animate'
      >
        <motion.button variants={buttonVariants}>REVIEWS</motion.button>
        <motion.button variants={buttonVariants}>SUBMIT</motion.button>
        <motion.button variants={buttonVariants}>ABOUT</motion.button>
      </motion.div>
      <div class='inner'></div>
    </div>
  );
};

export default Navbar;
