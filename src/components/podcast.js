import React from 'react';
import { Container } from 'react-bootstrap';
import './ContainerStyle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


const PodcastContainer = ({ image1,image2,image3,content }) => {
 return (
    <Container fluid className="pixis-container podcastcontent">
      <div className="content">
         
         <h1 className='heading'> Podcasts  <FontAwesomeIcon icon={faArrowRight} className='icon1'  /></h1>
        <h3 className='subheading'>{content}</h3>
      </div>
      <div className="image">
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
      </div>
    </Container>
 );
};

export default PodcastContainer;