import React, { Component } from 'react';
import profilepicture from './me.png';

const imgStyle = {
  width: '363px',
  height: '450px'  
}

class Cv extends Component {
  render(){
    return (
      <div className="under-construction">
        <div className="under-construction_text-container">
          <span className="under-construction_span">underConstruction</span>
          <span className="under-contruction_arrow-function animate-function">
            &#40;     &#41; &#61;&gt;  &#123;...
          </span>
        </div>
        <img src={profilepicture} alt="profilepicture" style={imgStyle}/>
      </div>
    );
  }
}

export default Cv;
