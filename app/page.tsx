import { Box } from "@mui/material";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Icon from "./components/Icon/Icon";
import Introduction from "./components/Homepage/IntroductionSection";
import PastProject from "./components/Homepage/ProjectSection";

export default function Home() {
  return (
    <>
      <Introduction />
      <PastProject />
    </>
  );
}
