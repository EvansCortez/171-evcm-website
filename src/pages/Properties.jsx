import React, { useEffect } from 'react';
import Properties from '../components/Properties';

function PropertiesPage() {
  useEffect(() => {
    document.title = 'Available Properties – 171 EVCM LLC | Glastonbury, CT';
  }, []);

  return <Properties />;
}

export default PropertiesPage;
