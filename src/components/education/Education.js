import React from 'react'
import './Education.css';
import {FormattedMessage} from 'react-intl';
import upiicsa from '../../images/upiicsa.png'
import ipn from '../../images/ipn.png'
import dmx from '../../images/3dmx.png'
import School from './School';

export default function Education() {
  const edu = [
    {
      id: "ipn",
      title: "UPIICSA - IPN",
      img1 : upiicsa,
      img2 : ipn,
      degree: "upiicsa"
    },
    {
      id: "dmx",
      title: "3DMX",
      img1 : dmx,
      degree: "dmx"
    }
  ]
  return (
    <div id="nav-education-link" className="education-container">
      <span className="section-title">
        <FormattedMessage 
          id="nav-education-link"
          defaultMessage="nav-education-link"
          description="education-title"
        />
      </span>
      <div className="schools-container">
        {
          edu.map(school =>
            <School 
              school={school}
              key={school.id}
            />
          )
        }
      </div>
    </div>
  )
}
