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
      top: destination.offsetTop - 50,
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
        <VizSensor
          partialVisibility
          offset={{top: 200}} 
          onChange={(isVisible) =>{
            if(isVisible) this.setState({section: 'ABOUT'})
          }}>
          <About/>
        </VizSensor>
        <VizSensor
          partialVisibility
          offset={{top: 200}} 
          onChange={(isVisible) =>{
            if(isVisible) this.setState({section: 'EXPERIENCE'})
          }}>
          <Experience />
        </VizSensor>
        <VizSensor
          partialVisibility
          offset={{top: 200}} 
          onChange={(isVisible) =>{
            if(isVisible) this.setState({section: 'PROJECTS'})
          }}>
          <Projects />
        </VizSensor>
        <VizSensor
          partialVisibility
          offset={{top: 200}} 
          onChange={(isVisible) =>{
            if(isVisible) this.setState({section: 'TECH'})
          }}>
          <Stacks />
        </VizSensor>
        <VizSensor
          partialVisibility
          offset={{top: 200}} 
          onChange={(isVisible) =>{
            if(isVisible) this.setState({section: 'EDUCATION'})
          }}>
          <Education />
        </VizSensor>
        <VizSensor
          partialVisibility
          offset={{top: 200}} 
          onChange={(isVisible) =>{
            if(isVisible) this.setState({section: 'CONTACT'})
          }}>
          <Contact />
        </VizSensor>
      </div>
    );
  }
}

export default App;
