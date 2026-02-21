import './About.css';
import {FormattedMessage} from 'react-intl';

export default function About() {
  
  const aboutMessages = '<p>I am a Senior Frontend Engineer / Software Engineer driven by a lifelong fascination with interactive experiences, a passion that began with gaming and evolved into building complex, scalable solutions. With over a decade of experience, I thrive on tackling technical challenges that sit at the intersection of creativity and logic.</p> <p> Whether I’m architecting a new system or refining a user journey, I approach every project with a creator’s mindset: always looking for ways to make the solution more intuitive, the code more elegant, and the experience more engaging. I am a dedicated lifelong learner, a collaborative team player, and a leader who believes that the best software is built when technical excellence meets a shared creative vision. </p>';

  const cvLink = '/portfolio/AdrianRossinoCV.pdf';

  return (
    <div id='nav-about-link' className='about' >
      <p className='about-body'>
        <FormattedMessage 
          id='about-me'
          defaultMessage={aboutMessages}
          description='About me section'
          values={{
            p: (chunks: React.ReactNode) => <p className='about_paragraph'>{chunks}</p>
          }}
        />
      </p>

      <a href={cvLink} download className='about_download'>
        <FormattedMessage 
          id='download-link'
          defaultMessage='Download my resume'
          description='Resume download link'
        />
      </a>
      
    </div>
  )
}
