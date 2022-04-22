import { useNavigate } from "react-router-dom";
import FabSlider from "../../components/FabSlider";
import DoubleColumnContainer from "../../components/DoubleColumnContainer";
import Fabutton from "../../components/Fabutton";
import FabuttonLink from "../../components/FabuttonLink";
import smileyHappy from "../../assets/pictograms/FM-Emoji_ohneRand61.png";
import smileyBroken from "../../assets/pictograms/FM-Emoji_ohneRand55.png";
import RobiGif from "../../components/RobiGif";
import robiLongarmslide from "../../assets/robi-gifs/Robi_longarmslide-min.gif";

function Screen() {
  const navigate = useNavigate();
  const nextRoute = "/wiewars/erwartungen";
  return (
    <>
      <div style={{ marginBottom: "auto" }}>
        <p>3D-Modelling rockt?</p>
      </div>
      <FabSlider imgTop={smileyHappy} imgBottom={smileyBroken} />

      <DoubleColumnContainer>
        <Fabutton
          onClick={() => navigate(nextRoute)}
          style={{ borderRight: 0 }}
        >
          nicht benutzt
        </Fabutton>
        <FabuttonLink to={nextRoute} style={{ flexBasis: "50%" }}>
          weiter
        </FabuttonLink>
      </DoubleColumnContainer>
      <RobiGif
        src={robiLongarmslide}
        style={{ left: -300, top: 220, transform: "rotate(90deg)" }}
      />
    </>
  );
}

export default Screen;
