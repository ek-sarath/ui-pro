import React from 'react';

const CustomCard = ({ children, width, height }) => {
  const cardStyle = {
    background: 'linear-gradient(300deg, #F5F2EB 1.26%, #F7E6CB 100.49%)',
    boxShadow: '5.53883px 5.53883px 28.8019px 0px #DD8762',
    width: width || '300px',
    height: height || '100px', 
  };

  return (
    <div className="bg-white rounded-full shadow-lg p-4 m-4 max-w-sm" style={cardStyle}>
      <div className="p-4">
        {children}
      </div>
    </div>
  );
};

export default CustomCard;
