import './Experience.css';
import {FormattedMessage} from 'react-intl';
import { Icons } from '../../constant/iconEnum';
import Company from './Company';
import {
  Android,
  Apache,
  Bootstrap5,
  CSS,
  Doctrine,
  Docker,
  HTML5,
  Java,
  JQuery,
  JavaScript,
  MochaJS,
  MySQL,
  NodeJs,
  Oracle,
  PHP,
  Sass,
  Spring,
  SymfonyDark,
  TypeScript
} from 'developer-icons';

// Companies
import ma from '../../images/ma.jpg';
import meda from '../../images/meda.jpg';
import femexfut from '../../images/femexfut.png';
import pro from '../../images/pro.jpg';
import condu from '../../images/condu.png';
import amzn from '../../images/amzn.png';

// Local icons
import chai from '../../images/chai.png';
import jsp from '../../images/jsp.png';
import magento from '../../images/magento.png';
import ojet from '../../images/ojet.png';
import plsql from '../../images/plsql.png';
import sinon from '../../images/sinon.png';
import sp from '../../images/sp.png';
import sugar from '../../images/sugar.gif';


const drupal = Icons.Drupal;
const tomcat = Icons.Tomcat;

export default function Experience() {
  const experience = [
    {
      id: 'amazon',
      company: "Amazon",
      years: "01/2022 - Present",
      title: <span>SDE / <br/> Front End Engineer</span>,
      tech: [
        { name: "TypeScript", icon: TypeScript },
        { name: "React", icon: Icons.React },
        { name: "Node.js", icon: NodeJs },
        { name: "AWS", icon: Icons.AWS },
        { name: "Docker", icon: Docker },
        { name: "Kubernetes", icon: Icons.Dynamo },
        { name: "Sass", icon: Sass },
        { name: "Jest", icon: Icons.Jest },
        { name: "Mocha", icon: MochaJS },
        { name: "JavaScript", icon: JavaScript },
        { name: "HTML5", icon: HTML5 },
        { name: "Java", icon: Java },
      ],
      responsibilities: "amazon-desc",
      companyImage: amzn
    },
    {
      id: 'oracle',
      company: "Oracle",
      years: "07/2020 - 12/2021",
      title: "Applications Developer",
      tech: [
        { name: "TypeScript", icon: TypeScript },
        { name: "Oracle JET", icon: ojet },
        { name: "HTML5", icon: HTML5 },
        { name: "CSS3", icon: CSS },
        { name: "JavaScript", icon: JavaScript },
        { name: "Sinon.JS", icon: sinon },
        { name: "Chai", icon: chai },
        { name: "Mocha", icon: MochaJS },
        { name: "Sass", icon: Sass }
      ],
      responsibilities: "oracle-desc",
      companyImage: Oracle
    },
    {
      id: 'ma',
      company: "Match Analysis",
      years: "05/2015 - 12/2019",
      title: "Full Stack Developer",
      tech: [
        { name: "HTML5", icon: HTML5 },
        { name: "CSS3", icon: CSS },
        { name: "JavaScript", icon: JavaScript },
        { name: "Java", icon: Java },
        { name: "MySQL", icon: MySQL },
        { name: "Stored Procedures", icon: sp },
        { name: "JSP", icon: jsp },
        { name: "Tomcat", icon: tomcat },
        { name: "Apache", icon: Apache }
      ],
      responsibilities: "ma-desc",
      companyImage: ma
    },
    {
      id: 'meda',
      company: "Medios Alterados",
      years: "11/2014 - 05/2015",
      title: "Full Stack Developer",
      tech: [
        { name: "HTML5", icon: HTML5 },
        { name: "CSS3", icon: CSS },
        { name: "JavaScript", icon: JavaScript },
        { name: "PHP", icon: PHP },
        { name: "Drupal", icon: drupal },
        { name: "Magento", icon: magento },
        { name: "Symfony", icon: SymfonyDark },
        { name: "Android", icon: Android },
        { name: "Java", icon: Java },
        { name: "MySQL", icon: MySQL },
        { name: "Bootstrap", icon: Bootstrap5 },
        { name: "jQuery", icon: JQuery },
        { name: "Doctrine", icon: Doctrine },
        { name: "SugarCRM", icon: sugar }
      ],
      responsibilities: "meda-desc",
      companyImage: meda
    },
    {
      id: 'femexfut',
      company: "FEMEXFUT",
      years: "03/2014 - 09/2014",
      title: "Java Developer",
      tech: [
        { name: "HTML5", icon: HTML5 },
        { name: "CSS3", icon: CSS },
        { name: "Spring", icon: Spring },
        { name: "Java", icon: Java },
        { name: "MySQL", icon: MySQL },
        { name: "Bootstrap", icon: Bootstrap5 },
        { name: "JSP", icon: jsp },
        { name: "jQuery", icon: JQuery },
        { name: "Node.js", icon: NodeJs },
        { name: "Tomcat", icon: tomcat },
        { name: "Apache", icon: Apache }
      ],
      responsibilities: "femexfut-desc",
      companyImage: femexfut
    },
    {
      id: 'pro',
      company: "Prospectiva",
      years: "11/2013 - 03/2014",
      title: "Java Developer",
      tech: [
        { name: "Java", icon: Java },
        { name: "jQuery", icon: JQuery },
        { name: "Tomcat", icon: tomcat },
        { name: "Spring", icon: Spring },
        { name: "HTML5", icon: HTML5 },
        { name: "CSS3", icon: CSS }
      ],
      responsibilities: "pro-desc",
      companyImage: pro
    },
    {
      id: 'condu',
      company: "CONDUSEF",
      years: "04/2013 - 11/2013",
      title: "Junior Java Developer",
      tech: [
        { name: "Oracle DB", icon: Oracle },
        { name: "PL/SQL", icon: plsql },
        { name: "MySQL", icon: MySQL },
        { name: "Java", icon: Java }
      ],
      responsibilities: "condu-desc",
      companyImage: condu
    }
  ];


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
              {...company}
              key={company.id}
            />
          )
        }
      </div>
    </div>
  )
}
