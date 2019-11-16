import React from 'react'
import {FormattedMessage} from 'react-intl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function MenuItem(props) {
  const { id, icon, defaultMessage, description, section} = props.item;

  return (
    <li 
      className={"navigation_item "+(props.section === section ? "selected" : "")} 
      onClick={props.changeSection.bind(this, section)}>
      <FontAwesomeIcon 
        icon={icon} 
        className="navigation-item_icon"/>
      <FormattedMessage 
        id={id}
        defaultMessage={defaultMessage}
        description={description}/>
    </li>
  )
}
