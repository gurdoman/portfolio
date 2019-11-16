import React, { Component } from 'react';
import Nav from './components/nav/Nav'
import './App.css';
import About from './components/about/About';
import VizSensor from 'react-visibility-sensor';
import Experience from './components/experience/Experience';
import Projects from './components/projects/Projects';

class App extends Component {
  constructor(){
    super();
    
    this.state = {
      section : 'ABOUT',
      open: false
    }
  }

  changeSection = (section) =>{
    this.setState({section});
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
          <About />
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
          <Projects open={this.state.open}/>
        </VizSensor>
      </div>
    );
  }
}

export default App;
