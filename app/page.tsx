import { Box } from "@mui/material";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Icon from "./components/Icon/Icon";

export default function Home() {
  return (
    <div
      className="flex
       flex-col
       text-center
        justify-center"
    >
      <h1
        className="
        text-8xl
         font-bold"
      >
        Hi my name is
      </h1>
      <div
        className="
        flex
        flex-row
        text-center
        justify-center"
      >
        <h5 className="text-2xl p-2">My tech stack </h5>
        <Icon name="nextjs" width={50} height={50} />
        <Icon name="tailwind" width={50} height={50} />
        <Icon name="mongodb" width={50} height={50} />
        <Icon name="css3" width={50} height={50} />
      </div>
    </div>
  );
}
