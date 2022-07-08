import { useNavigate } from "react-router-dom";
import FabSlider from "../../components/FabSlider";
import DoubleColumnContainer from "../../components/DoubleColumnContainer";
import Fabutton from "../../components/Fabutton";
import FabuttonNext from "../../components/FabuttonNext";
import smileyHappy from "../../assets/pictograms/FM-Emoji_ohneRand61.png";
import smileyBroken from "../../assets/pictograms/FM-Emoji_ohneRand55.png";
import RobiGif from "../../components/RobiGif";
import robiLongarmslide from "../../assets/robi-gifs/Robi_longarmslide-min.gif";

function Screen({ onSubmit, data }) {
  const navigate = useNavigate();
  const nextRoute = "/wiewars/erwartungen";
  function hasUserAnswered() {
    if (typeof data === "number" || typeof data === "string") {
      return true;
    }
    return false;
  }
  return (
    <>
      <div>
        <p>3D-Modelling rockt?</p>
      </div>
      <FabSlider
        imgTop={smileyHappy}
        imgBottom={smileyBroken}
        onChange={onSubmit}
        value={isNaN(data) ? 0 : data}
      />

      <DoubleColumnContainer>
        <Fabutton
          isActive={data === "nicht benutzt"}
          onClick={() => {
            onSubmit("nicht benutzt");
            navigate(nextRoute);
          }}
        >
          nicht benutzt
        </Fabutton>
        <FabuttonNext
          to={nextRoute}
          enabled={hasUserAnswered()}
          style={{ flexBasis: "50%" }}
        >
          weiter
        </FabuttonNext>
      </DoubleColumnContainer>
      <RobiGif
        src={robiLongarmslide}
        style={{ left: -300, top: "15%", transform: "rotate(90deg)" }}
      />
    </>
  );
}

export default Screen;
