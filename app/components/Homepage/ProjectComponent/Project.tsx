import { EmblaOptionsType } from "embla-carousel-react";
import Icon from "../../Icon/Icon";
import EmblaCarousel from "./Carousel";
interface ProjectProps {
  name: string;
  tech_stack: string[];
  picture?: React.ReactNode[];
  description?: string;
}

const Project: React.FC<ProjectProps> = ({
  name,
  tech_stack,
  picture,
  description,
}) => {
  const OPTIONS: EmblaOptionsType = {};
  const SLIDE_COUNT = 10;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  return (
    <div className="w-full h-full flex flex-col sm:flex-row justify-evenly">
      <div className="text-2xl font-bold mb-4">{name}</div>
      {tech_stack.map((tname, index) => (
        <Icon key={index} name={tname} width={50} height={50} />
      ))}
      {description}
      <div>
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </div>
    </div>
  );
};

export default Project;
