// MeatyFoods.js
import React from 'react';

import MenuSection from './MenuSection';

const MeatyFoods = ({ items }) => {
  const sectionStyle = {
    backgroundColor: 'lightcoral',
    // Additional styles specific to this section
  };
  const iconStyle = {
    // Styles for icons in this section
  };

  return <MenuSection items={items} sectionStyle={sectionStyle} iconStyle={iconStyle} />;
};

export default MeatyFoods;
