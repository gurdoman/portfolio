import {FormattedMessage} from 'react-intl';

interface SchoolProps {
  title: string;
  img1: string;
  img2?: string;
  degree: string;
  certificate?: string;
  certificateUrl?: string;
}

export default function School({
  title,
  img1,
  img2,
  degree,
  certificate,
  certificateUrl
}: SchoolProps) {
  return (
    <div className='school-container'>
      <img 
        className='school-container_img-left' 
        src={img1} 
        alt='school logo'
      />
      {
        img2 ?  
        <img 
          className='school-container_img-right' 
          src={img2} 
          alt='school logo'
        /> : ''
      }
      <span className='school-container_name'>{title}</span>
      <span className='school-container_degree'>
        <FormattedMessage 
          id={degree}
          defaultMessage={degree}
          description='school-degree'
        />
      </span>
      {
        certificate ? 
        <a
          href={certificateUrl}
          target='_blank'
        >
          <img src={certificate} alt='certificate' className='school-container_certificate'/>
        </a> : ''
      }
    </div>
  )
}
