import React from 'react';
import './form.css'; // Import custom styles

const CoffeeFormPage: React.FC = () => {
  return (
    <iframe
      src='https://docs.google.com/forms/d/e/1FAIpQLSdVivUQIkPFh-NWNuQeGteOo59hp9vKW7AjcBuezxNsEjWfzw/viewform?embedded=true'
      className='form'
    >
      Loading…
    </iframe>
  );
};

export default CoffeeFormPage;
