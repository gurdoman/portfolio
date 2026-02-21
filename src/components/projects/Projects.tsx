import './Projects.css';
import {FormattedMessage} from 'react-intl';
import a3dmax from '../../images/3dmax.png'
import bb from '../../images/bb.png'
import jsp from '../../images/jsp.png'
import thor from '../../images/thor.jpg'
import liberatum from '../../images/liberatum.png'
import streamviewer from '../../images/streamviewer.jpg'
import tangolive from '../../images/tangolive.jpg'
import tango from '../../images/tango.jpg'
import workorder from '../../images/workorder.jpg'
import { Project } from './Project';
import { Icons } from '../../constant/iconEnum';

export default function Projects() {
  const projects = [
    {
      id : 'tangolive',
      title : "Tango Live",
      img : tangolive,
      href : "",
      tech : [jsp, Icons.Java, Icons.HTML, Icons.CSS, Icons.JS, Icons.MYSQL]
    },
    {
      id : 'streamviewer',
      title : "Stream Viewer",
      img : streamviewer,
      href : "",
      tech : [Icons.React, Icons.Java, Icons.HTML, Icons.CSS, Icons.JS, Icons.Spring]
    },
    {
      id : 'liberatum',
      title : "Liberatum - Film Festival",
      img : liberatum,
      href : "http://liberatum.mediosalterados.net",
      tech : [Icons.Drupal, Icons.HTML, Icons.CSS, Icons.JS, Icons.JQuery, Icons.Bootstrap]
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
      tech : [jsp, Icons.Java, Icons.HTML, Icons.CSS, Icons.JS, Icons.MYSQL]
    },
    {
      id : 'workorder',
      title : "Work Orders",
      img : workorder,
      href : "",
      tech : [Icons.React, Icons.Bootstrap, Icons.HTML, Icons.CSS, Icons.JS]
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
              {...project}
              key={project.id}
            />
          )
        }
      </div>
    </div>
  )
}
