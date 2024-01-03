import React from 'react';
import './ContainerStyle.css';
<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@900&display=swap');
</style>

const LastSection = (props) => {
  return (
    <div className='section'>
<div className="overlaysection" style={{backgroundImage: `url(${props.image})`}}>
 </div>
 <div className="lastsection">
      <div className="lastsectioncontent">
        <h1>Ready to give your content a fresher look with our editing?</h1>
        <button>
          <a href="https://www.linkedin.com">Reach us Out</a>
        </button>
      </div>
    </div>
    </div>
  );
};

export default LastSection;
