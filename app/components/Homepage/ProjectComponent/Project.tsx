import Icon from "../../Icon/Icon";

interface ProjectProps {
  name: string;
  tech_stack: string[];
  picture?: string;
  description?: string;
}

const Project: React.FC<ProjectProps> = ({
  name,
  tech_stack,
  picture,
  description,
}) => {
  return (
    <div className="flex flex-col justify-evenly">
      <div className="text-2xl font-bold mb-4">
        {name}
        {tech_stack.map((tname, index) => (
          <Icon key={index} name={tname} width={50} height={50} />
        ))}
        {description}
      </div>
      <div></div>
    </div>
  );
};

export default Project;
