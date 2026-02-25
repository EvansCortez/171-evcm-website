import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';

function Home() {
  useEffect(() => {
    document.title = '171 EVCM LLC – Real Estate & Property Management | Glastonbury, CT';
  }, []);

  return (
    <>
      <Hero />
      <Services />
    </>
  );
}

export default Home;
