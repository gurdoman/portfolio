import React, { Component } from 'react'
import './Nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faUser, faLaptopCode, faCode, faGraduationCap, faMailBulk, faKeyboard } from '@fortawesome/free-solid-svg-icons'
import { ReactComponent as Logo } from "./logo.svg"
import { ReactComponent as Title } from "./letters.svg"
import onClickOutside from "react-onclickoutside";
import MenuItem from './MenuItem';

class Nav extends Component {

  render() {
    const menuItems = [
      {
        id : "nav-about-link",
        section : 'ABOUT',
        icon : faUser,
        defaultMessage : "About Me",
        description : "About me link"
      },
      {
        id : "nav-experience-link",
        section : 'EXPERIENCE',
        icon : faLaptopCode,
        defaultMessage : "Experience",
        description : "Experience link"
      },
      {
        id : "nav-projects-link",
        section : 'PROJECTS',
        icon : faCode,
        defaultMessage : "Projects",
        description : "Projects link"
      },
      {
        id : "nav-tech-link",
        section : 'TECH',
        icon : faKeyboard,
        defaultMessage : "Tech Stack",
        description : "Stack link"
      },
      {
        id : "nav-education-link",
        section : 'EDUCATION',
        icon : faGraduationCap,
        defaultMessage : "Education",
        description : "Education link"
      },
      {
        id : "nav-contact-link",
        section : 'CONTACT',
        icon : faMailBulk,
        defaultMessage : "Contact",
        description : "Contact link"
      }
    ]


    return (
      <nav className="navigation-container">
      <span
        className={"navigation-toggle " + (this.props.open ? "open" : "")}
        onClick={this.props.openNav}>
        <FontAwesomeIcon icon={faBars} className="navigation-toggle_bars"/>
      </span>
      <div className="navigation_top-bar">
        <Title className="navigation-top-bar_title"/>
        <Logo className="navigation-top-bar_logo"/>
      </div>
      <div className={"navigation "+(this.props.open ? "open" : "")}>
        <Logo className="navigation_logo"/>
        <ul className="navigation_menu">
          {
            menuItems.map(item =>
              <MenuItem 
                item={item} 
                key={item.id}
                changeSection={this.props.changeSection}
                section={this.props.section}
              />
            )
          }
        </ul>
      </div>
    </nav>
    )
  }
}


export default onClickOutside(Nav);