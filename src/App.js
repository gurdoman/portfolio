import React, { Component } from 'react';
import Nav from './components/nav/Nav'
import './App.css';
import About from './components/about/About';
import VizSensor from 'react-visibility-sensor';
import Experience from './components/experience/Experience';
import Projects from './components/projects/Projects';
import Stacks from './components/stack/Stacks';
import Education from './components/education/Education';
import Contact from './components/contact/Contact';

class App extends Component {
  constructor(){
    super();
    
    this.state = {
      section : 'ABOUT',
      open: false
    }
  }

  changeSection = (section, id) =>{
    this.setState({section});
    let destination = document.getElementById(id);
    window.scrollTo({
      top: destination.offsetTop - (window.innerWidth > 1200 ? 0 : 50) ,
      behavior: 'smooth'
    })
  }

  handleClickOutside = () => {
    if(this.state.open) this.setState({open: false});
  };

  openNav = () =>{
    this.setState({open : !this.state.open});
  }

  render(){
    return (
      <div className="App">
        <Nav 
          section={this.state.section}
          changeSection={this.changeSection}
          handleClickOutside={this.handleClickOutside}
          open={this.state.open}
          openNav={this.openNav}
        />
        <About/>
        <Experience />
        <Projects />
        <Stacks />
        <Education />
        <Contact />
      </div>
    );
  }
}

export default App;
