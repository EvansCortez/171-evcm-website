import React, { useEffect } from 'react';
import Contact from '../components/Contact';

function ContactPage() {
  useEffect(() => {
    document.title = 'Contact Us – 171 EVCM LLC | Get In Touch';
  }, []);

  return <Contact />;
}

export default ContactPage;
