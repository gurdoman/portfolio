import React from 'react'
import './Stacks.css';
import {FormattedMessage} from 'react-intl';
import android from '../../images/android.jpg'
import bootstrap from '../../images/bootstrap.png'
import css from '../../images/css.png'
import drupal from '../../images/drupal.png'
import github from '../../images/github.png'
import html from '../../images/html.png'
import java from '../../images/java.png'
import jquery from '../../images/jquery.png'
import js from '../../images/js.png'
import jsp from '../../images/jsp.png'
import mysql from '../../images/mysql.png'
import oracle from '../../images/oracle.png'
import php from '../../images/php.png'
import plsql from '../../images/plsql.png'
import photoshop from '../../images/photoshop.png'
import react from '../../images/react.png'
import sp from '../../images/sp.png'
import spring from '../../images/spring.png'
import svn from '../../images/svn.png'
import symfony from '../../images/symfony.png'
import tomcat from '../../images/tomcat.png'
import Stack from './Stack';

export default function Stacks() {

  const stacks = [
    {
      "Front-End":[
        {
          id: 'react',
          title : 'React',
          img: react
        },
        {
          id: 'bootstrap',
          title : 'Bootstrap',
          img: bootstrap
        },
        {
          id: 'html',
          title : 'HTML',
          img: html
        },
        {
          id: 'css',
          title : 'CSS',
          img: css
        },
        {
          id: 'js',
          title : 'JS',
          img: js
        },
        {
          id: 'jquery',
          title : 'JQuery',
          img: jquery
        }
      ]
     },
     {
      "Back-End":[
        {
          id: 'java',
          title : 'Java',
          img: java
        },
        {
          id: 'jsp',
          title : 'Java Server Pages',
          img: jsp
        },
        {
          id: 'php',
          title : 'PHP',
          img: php
        },
        {
          id: 'spring',
          title : 'Spring',
          img: spring
        },
        {
          id: 'symfony',
          title : 'Symfony',
          img: symfony
        }
      ]
     },
     {
      "Database":[
        {
          id: 'mysql',
          title : 'MYSQL',
          img: mysql
        },
        {
          id: 'oracle',
          title : 'Oracle',
          img: oracle
        },
        {
          id: 'plsql',
          title : 'PLSQL',
          img: plsql
        },
        {
          id: 'sp',
          title : 'Stored Procedures',
          img: sp
        }
      ]
     },
     {
      "Other":[
        {
          id: 'android',
          title : 'Android Studio',
          img: android
        },
        {
          id: 'drupal',
          title : 'Drupal',
          img: drupal
        },
        {
          id: 'github',
          title : 'Github',
          img: github
        },
        {
          id: 'photoshop',
          title : 'Photoshop',
          img: photoshop
        },
        {
          id: 'svn',
          title : 'SVN',
          img: svn
        },
        {
          id: 'tomcat',
          title : 'Tomcat',
          img: tomcat
        }
      ]
    } 
  ]
  return (
    <div id="nav-tech-link" className="tech-stack">
      <span className="section-title">
        <FormattedMessage 
          id="nav-tech-link"
          defaultMessage="nav-tech-link"
          description="tech-title"
        />
      </span>
      <div className="tech-stack_container">
        {
          stacks.map( (style,i) =>
            <Stack 
              title={Object.keys(style)[0]}
              stacks={style[Object.keys(style)[0]]}
              key={i}
            />
          )
        }
      </div>
    </div>
  )
}
