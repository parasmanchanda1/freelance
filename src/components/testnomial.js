
import React from 'react';
import { Container } from 'react-bootstrap';
import './ContainerStyle.css';

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@700&family=Noto+Sans:wght@800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@500&display=swap');

</style>


const testinomialContainer = (props) => {
    const { name, mail, content, time, date,image } = props;
  return (
    <Container fluid className="testnomial-container">
       
       <div className='customercont testnomial-cont'>
       <img src={image} alt=""/>

        <div className='testimage'>
            <h3> {name}</h3>
            <h4> {mail}</h4>
            </div>
        </div>

        <h3>{content}</h3>
        <h4>{time} . {date}</h4>
       
    </Container>
  );
};

export default testinomialContainer;

