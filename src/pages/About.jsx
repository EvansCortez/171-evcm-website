import React, { useEffect } from 'react';
import About from '../components/About';

function AboutPage() {
  useEffect(() => {
    document.title = 'About Us – 171 EVCM LLC | Real Estate & Property Management';
  }, []);

  return <About />;
}

export default AboutPage;
