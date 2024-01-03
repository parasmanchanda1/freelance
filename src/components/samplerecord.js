import React from 'react';
import './ContainerStyle.css';

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@700&family=Noto+Sans:wght@800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@500&display=swap');

</style>



const sample = ()=>
{
    return(
           
      <div className='record-section flex'>       
              <div className='growth'>
                   <h1 className='heading'>300,000+</h1>
                   <h3 className='subheading'>followers growth</h3>
              </div>


              <div className='growth'>
                <h1 className='heading'>50 million+</h1>
                <h3 className='subheading'>view on Instagram</h3>
              </div>


              <div className='growth'>
                <h1 className='heading'>20 million+</h1>
                <h3 className='subheading'> view on youtube</h3>
              </div>
      </div>
    )
};

export default sample;