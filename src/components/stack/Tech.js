import React from 'react'

export default function Tech(props) {
  const {id, title, img} = props.tech;
  return (
    <div className="type_stack">
      <img src={img} alt={id} className="stack_image"/>
      <span className="stack_title">{title}</span>
    </div>
  )
}
