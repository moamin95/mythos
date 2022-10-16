import React, { useState } from 'react';
import Ticker from './component/Ticker/Ticker';
import Hero from './component/Hero/Hero';
import Navbar from './component/Navbar/Navbar';
import ScrollTop from './component/ScrollTop/ScrollTop';
import Splash from './component/Splash/Splash';
import Follow from './component/Follow/Follow';
import SplashModal from './component/Splash/SplashModal';
import Footer from './component/Footer/Footer';

import './App.scss';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const checkModal = () => setIsModalOpen(!isModalOpen);

  return (
    <div className='App'>
      <Navbar />
      <Hero />
      <Splash checkModal={checkModal} />
      {isModalOpen && <SplashModal checkModal={checkModal} />}
      <Ticker />
      <Follow />
      <ScrollTop />
      <Footer />
    </div>
  );
}

export default App;
