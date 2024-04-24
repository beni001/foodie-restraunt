import React from 'react';

const MenuSection = ({ title, items, colorScheme, iconSet, addOns }) => {
    return (
        <div style={{ backgroundColor: colorScheme.background, color: colorScheme.text }}>
            <h2 style={{ fontFamily: 'your-heading-font' }}>{title}</h2>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <img src={iconSet[item.icon]} alt={item.name} style={{ marginRight: '10px' }} />
                            <div>
                                <p style={{ fontFamily: 'your-description-font' }}>{item.name}</p>
                                <p>{item.description}</p>
                                <p style={{ fontWeight: 'bold' }}>{item.price}</p>
                                {addOns && <p>{addOns}</p>}
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MenuSection;