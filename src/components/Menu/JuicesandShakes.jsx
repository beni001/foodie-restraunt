// JuicesAndShakes.js
import React from 'react';
import MenuSection from './BaseMenu';

const JuicesAndShakes = ({ items }) => {
  const sectionStyle = {
    backgroundColor: 'lightblue',
    // Additional styles specific to this section
  };
  const iconStyle = {
    // Styles for icons in this section
  };

  return <MenuSection items={items} sectionStyle={sectionStyle} iconStyle={iconStyle} />;
};

export default JuicesAndShakes;
