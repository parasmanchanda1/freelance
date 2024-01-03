import React from 'react';
import './ContainerStyle.css';
<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@700&family=Noto+Sans:wght@800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@500&display=swap');

</style>


const customerContainer = (props) => {
    const { image, name, subscriber} = props;
  return (
       
       <div className="customercont">
       <img src={image} alt=""/>
       <h3 className='heading3'>{name}</h3>
       <h3 className='heading3 cusmargin'>{subscriber}</h3>
       </div>
  );
};

export default customerContainer;

