import React, { Component } from 'react'
import {FormattedMessage} from 'react-intl';
import link from '../../images/link.png'

export default class Project extends Component {
  gotoPage = (href) =>{
    window.open(
      href, '_blank'
    )
  }

  render() {
    const {id, title, img, href, tech} = this.props.values;
    return (
      <div className="project">
        <div className="project_tech">
          {tech.map((tec, index) => <img src={tec} className="project_tech-logo" key={index} alt={id}/>)}
        </div>
        <div className="project_image-container"><img src={img} className="project_image"  alt={id}/></div>
        <span className="project_title">{title}</span>
        <p className="project_description">
          <FormattedMessage 
            id={id}
            defaultMessage=""
            description={id }
          />
        </p>
        {
          href !== '' ? 
          <img 
            src={link} 
            className="project_link" 
            onClick={this.gotoPage.bind(this, href)} 
            value={href} 
            alt="link"
          /> : ''
        }
      </div>
    )
  }
}
