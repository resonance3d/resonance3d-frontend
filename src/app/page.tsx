'use client'
import React from 'react';
import MainContent from '../components/maincontent';
//import ARSection from '../components/ARsection';
import ARExperience from '../components/ARexpriance';

//import BusinessEthics from '../components/BusinessEthics';
import TechnologiesExpertise from '../components/TechnologiesExpertise';
//import ClientTestimonials from '../components/clientstestmonial';
import DiscussYourIdea from '../components/discussyouridea';
import ServiceSection from '@/components/ServicesSection';


const Home = () => {
  return (
    <>
    <div>
      <MainContent/>  
      <ARExperience />
      <ServiceSection />
      <TechnologiesExpertise/>
      <DiscussYourIdea/>
    </div>
   
    </>
  );
};

export default Home;
             