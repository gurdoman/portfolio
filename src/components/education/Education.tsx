import './Education.css';
import {FormattedMessage} from 'react-intl';
import upiicsa from '../../images/upiicsa.png';
import fcc from '../../images/fcc.png';
import ipn from '../../images/ipn.png';
import dmx from '../../images/3dmx.png';
import rwd from '../../images/rwd.png';
import algo from '../../images/algo.png';
import School from './School';

export default function Education() {
  const edu = [
    {
      id: 'ipn',
      title: 'UPIICSA - IPN',
      img1 : upiicsa,
      img2 : ipn,
      degree: 'upiicsa'
    },
    {
      id: 'dmx',
      title: '3DMX',
      img1 : dmx,
      degree: 'dmx'
    },
    {
      id: 'fcc1',
      title: 'freeCodeCamp',
      img1 : fcc,
      degree: 'responsive-web',
      certificate: rwd,
      certificateUrl: 'https://www.freecodecamp.org/certification/gurdoman/responsive-web-design'
    },
    {
      id: 'fcc2',
      title: 'freeCodeCamp',
      img1 : fcc,
      degree: 'algorithms',
      certificate: algo,
      certificateUrl: 'https://www.freecodecamp.org/certification/gurdoman/javascript-algorithms-and-data-structures'
    }
  ]
  return (
    <div id='nav-education-link' className='education-container'>
      <span className='section-title'>
        <FormattedMessage 
          id='nav-education-link'
          defaultMessage='nav-education-link'
          description='education-title'
        />
      </span>
      <div className='schools-container'>
        {
          edu.map(school =>
            <School 
              {...school}
              key={school.id}
            />
          )
        }
      </div>
    </div>
  )
}
