import React from 'react';
import { Container } from 'react-bootstrap';
import './ContainerStyle.css';

const ThumbnailContainer = ({ image, content,  }) => {
  return (
    <Container fluid className="pixis-container thumbnailcontainer">
      <div className="image thumbnailimage">
        <img src={image} alt="" />
      </div>

      <div className="thumbnailcontent">
        <h1 className='heading'> Thumbnails</h1>
        <h3 className='subheading'>{content}</h3>
      </div>
    </Container>
  );
};

export default ThumbnailContainer;
