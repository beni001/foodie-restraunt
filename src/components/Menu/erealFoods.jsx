import React from 'react';

import MenuSection from './MenuSection';

const CerealFoods = ({ items }) => {
  const sectionStyle = {
    backgroundColor: 'lightgreen',
    // Additional styles specific to this section
  };
  const iconStyle = {
    // Styles for icons in this section
  };

  return <MenuSection items={items} sectionStyle={sectionStyle} iconStyle={iconStyle} />;
};
export default CerealFoods;