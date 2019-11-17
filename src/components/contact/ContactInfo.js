import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function ContactInfo(props) {
  const {href, logo, info} = props.contact;
  return (
    <div className="contact-info">
      <FontAwesomeIcon
        icon={logo}
        className="contact-info_icon"
      />
      <a 
        href={href}
        className="contact-info_link"
        >
        {info}
      </a>
    </div>
  )
}
