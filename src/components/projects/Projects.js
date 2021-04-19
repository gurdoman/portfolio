import React from 'react'
import './Projects.css';
import {FormattedMessage} from 'react-intl';
import a3dmax from '../../images/3dmax.png'
import bb from '../../images/bb.png'
import react from '../../images/react.png'
import css from '../../images/css.png'
import drupal from '../../images/drupal.png'
import html from '../../images/html.png'
import java from '../../images/java.png'
import js from '../../images/js.png'
import jsp from '../../images/jsp.png'
import mysql from '../../images/mysql.png'
import thor from '../../images/thor.jpg'
import liberatum from '../../images/liberatum.png'
import jquery from '../../images/jquery.png'
import bootstrap from '../../images/bootstrap.png'
import streamviewer from '../../images/streamviewer.jpg'
import tangolive from '../../images/tangolive.jpg'
import spring from '../../images/spring.png'
import tango from '../../images/tango.jpg'
import workorder from '../../images/workorder.jpg'
import Project from './Project';

export default function Projects() {
  const projects = [
   
    {
      id : 'tangolive',
      title : "Tango Live",
      img : tangolive,
      href : "",
      tech : [jsp, java, html, css, js, mysql]
    },
    {
      id : 'streamviewer',
      title : "Stream Viewer",
      img : streamviewer,
      href : "http://streamviewer.adrianrossino.com",
      tech : [react, java, html, css, js, spring]
    },
    {
      id : 'liberatum',
      title : "Liberatum - Film Festival",
      img : liberatum,
      href : "http://liberatum.mediosalterados.net",
      tech : [drupal, html, css, js, jquery, bootstrap]
    },
    {
      id : 'thor',
      title : "Thor for Smash Bros",
      img : thor,
      href : "http://forums.kc-mm.com/Gallery/BrawlView.php?Number=27587",
      tech : [a3dmax, bb],
    },
    {
      id : 'tango',
      title : "Tango",
      img : tango,
      href : "",
      tech : [jsp, java, html, css, js, mysql]
    },
    {
      id : 'workorder',
      title : "Work Orders",
      img : workorder,
      href : "http://workorders.adrianrossino.com",
      tech : [react, bootstrap, html, css, js]
    }
  ]


  return (
    <div id="nav-projects-link" className="projects">
      <span className="section-title">
        <FormattedMessage 
          id="nav-projects-link"
          defaultMessage="nav-projects-link"
          description="projects-title"
        />
      </span>
      <div className="projects-container">
        {
          projects.map(project =>
            <Project
              values={project}
              key={project.id}
            />
          )
        }
      </div>
    </div>
  )
}
