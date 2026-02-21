import React, { ReactNode } from 'react';
import {FormattedMessage} from 'react-intl';

interface TechItem {
  name: string;
  icon: (string | React.ElementType);
}

interface CompanyProps {
  company: string;
  years: string;
  title: (string | ReactNode);
  tech: TechItem[];
  responsibilities: string;
  companyImage: (string | React.ElementType);
}

export default function Company({
  company,
  years,
  title,
  tech,
  responsibilities,
  companyImage
}: CompanyProps) {

  const CompanyImage = companyImage;

  return (
    <div className="experience_company">
      <div className="company_tech">
        {
          tech.map((Tec, index) => {
            if (typeof Tec.icon === 'string') {
              return <img src={Tec.icon} className="company_tech-logo" key={index} alt={Tec.name}/>;
            }
            return <Tec.icon className="company_tech-logo" key={index} />;
          })
        }
      </div>
      <div className="company_logo-container">
        {typeof companyImage === 'string' ? <img src={companyImage} className="company_logo" alt={company}/> : <CompanyImage className="company_logo" alt={company}/>}
      </div>
      <span className="company_name">{company}</span>
      <span className="company_years">{years}</span>
      <span className="company_title">
        {typeof title === 'string' ? title : <title />}
      </span>
      <p className="company_responsabilities">
        <FormattedMessage 
          id={responsibilities}
          defaultMessage=""
          description={company + " responsabilities"}
          values={{
            ul: (chunks: React.ReactNode) => (
              <ul className='company_list'>{chunks}</ul>
            ),
            li: (chunks: React.ReactNode) => (
              <li className='company_list_item'>{chunks}</li>
            )
          }}
        />
      </p>
    </div>
  )
}
