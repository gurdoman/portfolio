import React from 'react'
import {FormattedMessage} from 'react-intl';

export default function Company(props) {
  const {company, years, title, tech, responsabilities, src} = props.values;

  return (
    <div className="experience_company">
      <div className="company_tech">
        {tech.map((tec, index) => <img src={tec} className="company_tech-logo" key={index} alt={title}/>)}
      </div>
      <div className="company_logo-container"><img src={src} className="company_logo"  alt={title}/></div>
      <span className="company_name">{company}</span>
      <span className="company_years">{years}</span>
      <span className="company_title">{title}</span>
      <p className="company_responsabilities">
        <FormattedMessage 
          id={responsabilities}
          defaultMessage=""
          description={company + " responsabilities"}
        />
      </p>
    </div>
  )
}
