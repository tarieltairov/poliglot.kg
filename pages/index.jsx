import MainLayout from '../src/components/MainLayout/MainLayout';
import About from '../src/components/Home/About/About';
import Services from '../src/components/Home/Services/Services';
import Solutions from '../src/components/Home/Solutions/Solutions';
import Slider from '../src/components/Home/Slider/SliderBlock';
import PreFooter from '../src/components/Home/PreFooter/PreFooter';
import React from 'react';
import Hero from '../src/components/Home/Hero/Hero';
import Analytics from '../src/components/Home/Analytics/Analytics';
import Expertice from '../src/components/Home/Expertise/Expertise';
import Technologies from '../src/components/Home/Techonolgies/Technologies';


function Home() {
  return (
    <MainLayout>
      <Hero />
      <About />
      <Services />
      <Slider />
      <PreFooter />
      {/* <Expertice />
      <Technologies />
      <Solutions />
      <Analytics /> */}
    </MainLayout>
  );
}

export default Home;
