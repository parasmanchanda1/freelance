import React from 'react';
import './ContainerStyle.css'; // Import the CSS file for styling

const moving = (props) => {
  const containerStyle = {
    backgroundImage: `url(${props.image})`,
  };

  return (
    <div className="repeating-background" style={containerStyle}>
      {/* You can add any other content or components here */}
    </div>
  );
};

export default moving;
