import React from 'react'
import Tech from './Tech';

export default function Stack(props) {
  const {title, stacks} = props;
  return (
    <div className="tech-stack_type">
      <span className="type_title">{title}</span>
      <div className="tech-container">
        {
          stacks.map( tech =>
            <Tech 
              tech={tech} 
              key={tech.id}/>
          )
        }
      </div>
    </div>
  )
}
