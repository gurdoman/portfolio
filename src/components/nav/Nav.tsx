import { useRef, useEffect, useState } from 'react';
import './Nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBars, faUser, faLaptopCode, faCode, 
  faGraduationCap, faMailBulk, faKeyboard 
} from '@fortawesome/free-solid-svg-icons';
import Logo from "./logo.svg?react";
import Title from "./letters.svg?react";
import Defs from '../../images/defs.svg?react';
import MenuItem from './MenuItem';

interface NavProps {
  open: boolean;
  openNav: () => void;
  changeSection: (section: string, id: string) => void;
  section: string;
}

const Nav = ({
  open,
  openNav,
  changeSection,
  section
}: NavProps) => {

  const navRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (open && navRef.current && !navRef.current.contains(event.target as Node)) {
        openNav();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open, openNav]);

  const menuItems = [
    { id: "nav-about-link", section: 'ABOUT', icon: faUser, defaultMessage: "About Me" },
    { id: "nav-experience-link", section: 'EXPERIENCE', icon: faLaptopCode, defaultMessage: "Experience" },
    { id: "nav-projects-link", section: 'PROJECTS', icon: faCode, defaultMessage: "Projects" },
    { id: "nav-tech-link", section: 'TECH', icon: faKeyboard, defaultMessage: "Tech Stack" },
    { id: "nav-education-link", section: 'EDUCATION', icon: faGraduationCap, defaultMessage: "Education" },
    { id: "nav-contact-link", section: 'CONTACT', icon: faMailBulk, defaultMessage: "Contact" }
  ];

  return (
    <nav className="navigation-container" ref={navRef}>
      <Defs />
      <span
        className={`navigation-toggle ${open ? "open" : ""}`}
        onClick={openNav}
      >
        <FontAwesomeIcon icon={faBars} className="navigation-toggle_bars" />
      </span>

      <div className="navigation_top-bar">
        <Title className="navigation-top-bar_title" />
        <Logo className="navigation-top-bar_logo" />
      </div>

      <div className={`navigation ${open ? "open" : ""}`}>
        <Logo className="navigation_logo" />
        <ul className="navigation_menu">
          {menuItems.map((item) => (
            <MenuItem
              {...item}
              key={item.id}
              changeSection={changeSection}
              selected={section === item.section}
            />
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;