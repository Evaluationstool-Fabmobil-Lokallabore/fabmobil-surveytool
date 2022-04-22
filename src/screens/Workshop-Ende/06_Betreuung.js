import FabSlider from "../../components/FabSlider";
import WeiterButton from "../../components/WeiterButton";
import imgTop from "../../assets/pictograms/FM-Emoji_ohneRand58.png";
import imgBottom from "../../assets/pictograms/FM-Emoji_ohneRand57.png";

function Screen() {
  return (
    <>
      <div>
        <p>Wie fandest du die Betreuung im Fabmobil?</p>
      </div>
      <FabSlider imgTop={imgTop} imgBottom={imgBottom} />
      <WeiterButton navigateTo="/3D-Druck" />
    </>
  );
}

export default Screen;
