import React, { useEffect, useState } from 'react';
import Nav from './components/nav/Nav';
import './App.css';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Projects from './components/projects/Projects';
import Stacks from './components/stack/Stacks';
import Education from './components/education/Education';
import Contact from './components/contact/Contact';

const App: React.FC = () => {
  const [section, setSection] = useState<string>('ABOUT');
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { name: 'ABOUT', id: 'nav-about-link' },
        { name: 'EXPERIENCE', id: 'nav-experience-link' },
        { name: 'PROJECTS', id: 'nav-projects-link' },
        { name: 'TECH', id: 'nav-tech-link' },
        { name: 'EDUCATION', id: 'nav-education-link' },
        { name: 'CONTACT', id: 'nav-contact-link' },
      ];
      const offset = 80; 
      const current = sections.reduce((acc, curr) => {
        const element = document.getElementById(curr.id);
        if (element) {
          const top = element.getBoundingClientRect().top;
          if (top <= offset) {
            return curr.name;
          }
        }
        return acc;
      }, 'ABOUT');

      if (current !== section) {
        setSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [section]);

  const changeSection = (newSection: string, id: string) => {
    setSection(newSection);
    
    const destination = document.getElementById(id);
    if (destination) {
      const offset = window.innerWidth > 1200 ? 0 : 50;
      window.scrollTo({
        top: destination.offsetTop - offset,
        behavior: 'smooth'
      });
    }

    if (open) setOpen(false);
  };

  const openNav = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <div className="App">
      <Nav 
        section={section}
        changeSection={changeSection}
        open={open}
        openNav={openNav}
      />
      <main>
        <About />
        <Experience />
        <Projects />
        <Stacks />
        <Education />
        <Contact />
      </main>
    </div>
  );
};

export default App;