import React from 'react';
import ServicesSection from '../components/ServicesSection';
import WhyChooseUs from '../components/WhyChooseUs';
import FeaturedProjects from '../components/FeaturedProjects';
import Testimonials from '../components/Testimonials';
import Faqs from '../components/Faqs';
import HeroSection from '../components/HeroSection';
import GrowthGapSection from '../components/GrowthGapSection';
import BrandBalanceSection from '../components/BrandBalanceSection';

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <BrandBalanceSection/>
      <GrowthGapSection/>
      {/* <ServicesSection/> */}
      {/* <FeaturedProjects/>
      <WhyChooseUs/> */}
      <Testimonials/>
      <Faqs/>
    </div>
  );
}

export default Home;
