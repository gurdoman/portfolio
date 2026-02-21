export interface TechProps {
  id: string;
  title: string;
  img: string;
}

export default function Tech({id, title, img}: TechProps) {
  return (
    <div className="type_stack">
      <img src={img} alt={id} className="stack_image"/>
      <span className="stack_title">{title}</span>
    </div>
  )
}
