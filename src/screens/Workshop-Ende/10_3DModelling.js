import FabSlider from "../../components/FabSlider";
import DoubleColumnContainer from "../../components/DoubleColumnContainer";
import Fabutton from "../../components/Fabutton";
import FabuttonLink from "../../components/FabuttonLink";
import smileyHappy from "../../assets/pictograms/FM-Emoji_ohneRand61.png";
import smileyBroken from "../../assets/pictograms/FM-Emoji_ohneRand55.png";

function Screen() {
  return (
    <>
      <div style={{ marginBottom: "auto" }}>
        <p>3D-Modelling rockt?</p>
      </div>
      <FabSlider imgTop={smileyHappy} imgBottom={smileyBroken} />

      <DoubleColumnContainer>
        <Fabutton>nicht benutzt</Fabutton>
        <FabuttonLink to="/erwartungen2">weiter</FabuttonLink>
      </DoubleColumnContainer>
    </>
  );
}

export default Screen;
