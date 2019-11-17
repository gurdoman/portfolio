import React from 'react'
import {FormattedMessage} from 'react-intl';

export default function School(props) {
  const {title, img1, img2, degree} = props.school;
  return (
    <div className="school-container">
      <img 
        className="school-container_img-left" 
        src={img1} 
        alt="school logo"
      />
      {
        img2 ?  
        <img 
          className="school-container_img-right" 
          src={img2} 
          alt="school logo"
        /> : ''
      }
      <span className="school-container_name">{title}</span>
      <span className="school-container_degree">
        <FormattedMessage 
          id={degree}
          defaultMessage="degree"
          description="school-degree"
        />
      </span>
    </div>
  )
}
