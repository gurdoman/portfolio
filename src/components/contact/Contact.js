import React from 'react'
import './Contact.css';
import {FormattedMessage} from 'react-intl';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import ContactInfo from './ContactInfo';

export default function Contact() {
  const contactInfo = [
    {
      id: "mail",
      href: "mailto:arossino@outlook.com",
      logo : faEnvelope,
      info : "arossino@outlook.com"
    },
    {
      id: "github",
      href: "https://github.com/gurdoman",
      logo : faGithub,
      info : "github.com/gurdoman"
    },
    {
      id: "linkedin",
      href: "https://www.linkedin.com/in/rossino/",
      logo : faLinkedin,
      info : "linkedin.com/in/rossino/"
    }
  ]
  return (
    <div id="nav-contact-link" className="contact-container">
      <span className="section-title contact-title">
        <FormattedMessage 
          id="nav-contact-link"
          defaultMessage="nav-contact-link"
          description="contact-title"
        />
      </span>
      {
        contactInfo.map( contact =>
          <ContactInfo
            contact={contact}
            key={contact.id}
          />
        )
      }
    </div>
  )
}
