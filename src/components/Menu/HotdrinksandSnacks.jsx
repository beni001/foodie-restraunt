// HotDrinksAndSnacks.js
import React from 'react';
import MenuSection from './MenuSection';

const HotDrinksAndSnacks = () => {
  const hotDrinksStyle = {
    backgroundColor: 'lightgoldenrodyellow',
    // Additional styles specific to hot drinks
  };
  
  const snacksStyle = {
    backgroundColor: 'palegoldenrod',
    // Additional styles specific to snacks
  };

  const specialSnacksStyle = {
    backgroundColor: 'lemonchiffon',
    // Additional styles specific to special snacks
  };

  return (
    <div className="hot-drinks-and-snacks-section">
      {/* Render hot drinks */}
      <BaseMenu items={hotDrinksData} sectionStyle={hotDrinksStyle} iconStyle={{}} />

      {/* Render snacks */}
      <BaseMenu items={snacksData} sectionStyle={snacksStyle} iconStyle={{}} />

      {/* Render special snacks */}
      <BaseMenu items={specialSnacksData} sectionStyle={specialSnacksStyle} iconStyle={{}} />
    </div>
  );
};

export default HotDrinksAndSnacks;
