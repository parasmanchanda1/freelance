
import React, { useState, useEffect, useMemo } from 'react';
import { Container } from 'react-bootstrap';
import './ContainerStyle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@700&family=Noto+Sans:wght@800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@500&display=swap');

</style>


const PixisContainer = ({image1, image2,content }) => {
  const [imageIndex, setImageIndex] = useState(0);

  const images = useMemo(() => [image1, image2], []);
  

  useEffect(() => {
    const intervalId = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [images]);

  return (
    <Container fluid className="pixis-container">
      <div className="content">
        <h1 className='heading'>
          Stand-ups{' '}
          <FontAwesomeIcon
            icon={faArrowRight}
            className="icon1"
          />
        </h1>
        <h3 className='subheading'>{content}</h3>
      </div>
      <div className="image">
        <img src={images[imageIndex]}  alt="" />
      </div>
    </Container>
  );
};

export default PixisContainer;
