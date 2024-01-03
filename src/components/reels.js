import React from 'react';
import { Container } from 'react-bootstrap';
import './ContainerStyle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Moving from './moving.js';


const ReelsContainer = ({ image,content }) => {
 return (
    <Container fluid className="pixis-container reelscontainer">
      <div className="thumbnailcontent reelscontent">
         
         <h1 className='heading'> Reels  <FontAwesomeIcon icon={faArrowRight} className='icon1'/></h1>
        
        <h3 className='subheading'>{content}</h3>
      </div>
      <Moving image={image}/>
    </Container>
 );
};

export default ReelsContainer;