import {FormattedMessage} from 'react-intl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface MenuItemProps {
  id: string;
  icon: IconProp;
  defaultMessage: string;
  section: string;
  selected?: boolean;
  changeSection: (section: string, id: string) => void;
}

export default function MenuItem({ id, icon, defaultMessage, section, selected, changeSection}: MenuItemProps) {

  return (
    <li 
      className={`navigation_item ${selected ? "selected" : ""}`} 
      onClick={() => changeSection(section, id)}
    >
      <FontAwesomeIcon 
        icon={icon} 
        className="navigation-item_icon"/>
      <FormattedMessage 
        id={id}
        defaultMessage={defaultMessage}
      />
    </li>
  )
}
