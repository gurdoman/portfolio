import React from 'react'
import './Experience.css';
import {FormattedMessage} from 'react-intl';
import Company from './Company';
import ma from '../../images/ma.jpg'
import meda from '../../images/meda.jpg'
import femexfut from '../../images/femexfut.png'
import pro from '../../images/pro.jpg'
import condu from '../../images/condu.png'
import chai from '../../images/chai.png'
import android from '../../images/android.jpg'
import apache from '../../images/apache.jpg'
import bootstrap from '../../images/bootstrap.png'
import css from '../../images/css.png'
import doctrine from '../../images/doctrine.png'
import drupal from '../../images/drupal.png'
import html from '../../images/html.png'
import java from '../../images/java.png'
import jquery from '../../images/jquery.png'
import js from '../../images/js.png'
import jsp from '../../images/jsp.png'
import magento from '../../images/magento.png'
import mocha from '../../images/mocha.png'
import mysql from '../../images/mysql.png'
import node from '../../images/node.png'
import oracle from '../../images/oracle.png'
import ojet from '../../images/ojet.png'
import php from '../../images/php.png'
import plsql from '../../images/plsql.png'
import scss from '../../images/scss.png'
import sinon from '../../images/sinon.png'
import sp from '../../images/sp.png'
import spring from '../../images/spring.png'
import sugar from '../../images/sugar.gif'
import symfony from '../../images/symfony.png'
import tomcat from '../../images/tomcat.png'
import ts from '../../images/ts.png'


export default function Experience() {
  const experience = [
    {
      id: 'oracle',
      company : "Oracle",
      years : "07/2020",
      title : "Applications Developer",
      tech : [ts, ojet, html, css, js, sinon, chai, mocha, scss ],
      responsabilities : "oracle-desc",
      src : oracle
    },
    {
      id: 'ma',
      company : "Match Analysis",
      years : "05/2015 - 12/2019",
      title : "Full Stack Developer",
      tech : [html, css, js, java, mysql, sp, jsp, tomcat, apache],
      responsabilities : "ma-desc",
      src : ma
    },
    {
      id: 'meda',
      company : "Medios Alterados",
      years : "11/2014 - 05/2015",
      title : "Full Stack Developer",
      tech : [html, css, js, php, drupal, magento, symfony, android, java, mysql, bootstrap, jquery, doctrine, sugar],
      responsabilities : "meda-desc",
      src : meda
    },
    {
      id: 'femexfut',
      company : "FEMEXFUT",
      years : "03/2014 - 09/2014",
      title : "Java Developer",
      tech : [html, css, spring, java, mysql, bootstrap, jsp, jquery, node, tomcat, apache],
      responsabilities : "femexfut-desc",
      src : femexfut
    },
    {
      id: 'pro',
      company : "Prospectiva",
      years : "11/2013 - 03/2014",
      title : "Java Developer",
      tech : [java, jquery, tomcat, spring, html, css],
      responsabilities : "pro-desc",
      src : pro
    },
    {
      id: 'condu',
      company : "CONDUSEF",
      years : "04/2013 - 11/2013",
      title : "Junior Java Developer",
      tech : [oracle, plsql, mysql, java],
      responsabilities : "condu-desc",
      src : condu
    }
  ]


  return (
    <div id="nav-experience-link" className="experience">
      <span className="section-title">
        <FormattedMessage 
          id="nav-experience-link"
          defaultMessage="nav-experience-link"
          description="experience-title"
        />
      </span>
      <div className="experience-container">
        {
          experience.map(company =>
            <Company 
              values={company}
              key={company.id}
            />
          )
        }
      </div>
    </div>
  )
}
