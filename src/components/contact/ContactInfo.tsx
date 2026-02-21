import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface ContactInfoProps {
  href: string;
  logo: IconDefinition;
  info: string;
}

export default function ContactInfo({
  href,
  logo,
  info
}: ContactInfoProps) {
  
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
