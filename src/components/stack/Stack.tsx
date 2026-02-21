import Tech, { TechProps } from './Tech';

interface StackProps {
  title: string;
  stacks: TechProps[];
}

export default function Stack({
  title,
  stacks
}: StackProps) {
  return (
    <div className="tech-stack_type">
      <span className="type_title">{title}</span>
      <div className="tech-container">
        {
          stacks.map( tech =>
            <Tech 
              {...tech} 
              key={tech.id}/>
          )
        }
      </div>
    </div>
  )
}
