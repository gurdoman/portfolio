import './Stacks.css';
import {FormattedMessage} from 'react-intl';
import jsp from '../../images/jsp.png'
import plsql from '../../images/plsql.png'
import sp from '../../images/sp.png'
import svn from '../../images/svn.png'
import Stack from './Stack';
import ojet from '../../images/ojet.png'
import chai from '../../images/chai.png'
import sinon from '../../images/sinon.png'
import { Icons } from '../../constant/iconEnum';

interface StackItem {
  id: string;
  title: string;
  img: string;
}

type StackCategory = "Front-End" | "Back-End" | "Database" | "Other";

export default function Stacks() {

  const stacks: Record<StackCategory, StackItem[]> = {
    "Front-End":[
      {
        id: 'ts',
        title : 'TypeScript',
        img: Icons.TS
      },
      {
        id: 'react',
        title : 'React',
        img: Icons.React
      },
      {
        id: 'scss',
        title : 'Sass',
        img: Icons.Sass
      },
      {
        id: 'ojet',
        title : 'Oracle JET',
        img: ojet
      },
      {
        id: 'angular',
        title : 'Angular',
        img: Icons.Angular
      },
      {
        id: 'bootstrap',
        title : 'Bootstrap',
        img: Icons.Bootstrap
      },
      {
        id: 'html',
        title : 'HTML',
        img: Icons.HTML
      },
      {
        id: 'css',
        title : 'CSS',
        img: Icons.CSS
      },
      {
        id: 'js',
        title : 'JS',
        img: Icons.JS
      },
      {
        id: 'jest',
        title : 'Jest',
        img: Icons.Jest
      },
      {
        id: 'jquery',
        title : 'JQuery',
        img: Icons.JQuery
      },
      {
        id: 'npm',
        title : 'NPM',
        img: Icons.Npm
      }
    ],
    "Back-End":[
      {
        id: 'node',
        title : 'Node.js',
        img: Icons.Node
      },
      {
        id: 'java',
        title : 'Java',
        img: Icons.Java
      },
      {
        id: 'aws',
        title : 'AWS',
        img: Icons.AWS
      },
      {
        id: 'jsp',
        title : 'Java Server Pages',
        img: jsp
      },
      {
        id: 'php',
        title : 'PHP',
        img: Icons.PHP
      },
      {
        id: 'spring',
        title : 'Spring',
        img: Icons.Spring
      },
      {
        id: 'symfony',
        title : 'Symfony',
        img: Icons.Symfony
      },
      {
        id: 'cpp',
        title : 'C++',
        img: Icons.CPP
      },
      {
        id: 'junit',
        title : 'JUnit',
        img: Icons.JUnit
      }
    ],
    "Database":[
      {
        id: 'mysql',
        title : 'MYSQL',
        img: Icons.MYSQL
      },
      {
        id: 'dynamo',
        title : 'DynamoDB',
        img: Icons.Dynamo
      },
      {
        id: 'oracle',
        title : 'Oracle',
        img: Icons.Oracle
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
    ],
    "Other":[
      {
        id: 'sinon',
        title : 'Sinon',
        img: sinon
      },
      {
        id: 'mocha',
        title : 'Mocha',
        img: Icons.Mocha
      },
      {
        id: 'chai',
        title : 'Chai',
        img: chai
      },
      {
        id: 'android',
        title : 'Android Studio',
        img: Icons.Android
      },
      {
        id: 'drupal',
        title : 'Drupal',
        img: Icons.Drupal
      },
      {
        id: 'git',
        title : 'Git',
        img: Icons.Git
      },
      {
        id: 'photoshop',
        title : 'Photoshop',
        img: Icons.Photoshop
      },
      {
        id: 'svn',
        title : 'SVN',
        img: svn
      },
      {
        id: 'tomcat',
        title : 'Tomcat',
        img: Icons.Tomcat
      }
    ]
  }

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
          Object.keys(stacks).map((categoryName, i) => {
            return (
              <Stack 
                title={categoryName}
                stacks={stacks[categoryName as keyof typeof stacks]}
                key={i}
              />
            )
          })
        }
      </div>
    </div>
  )
}
