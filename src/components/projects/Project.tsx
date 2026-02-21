import {FormattedMessage} from 'react-intl';
import link from '../../images/link.png'

interface ProjectProps {
  id: string;
  title: string;
  img: string;
  href: string;
  tech: string[];
}

export function Project({
  id,
  title,
  img,
  href,
  tech
}: ProjectProps) {

  const gotoPage = (href: string) =>{
    window.open(
      href, '_blank'
    )
  }

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
          onClick={() => gotoPage(href)} 
          alt="link"
        /> : ''
      }
    </div>
  )
}
