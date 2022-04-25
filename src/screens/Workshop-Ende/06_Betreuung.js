import FabSlider from "../../components/FabSlider";
import WeiterButton from "../../components/WeiterButton";
import imgTop from "../../assets/pictograms/FM-Emoji_ohneRand58.png";
import imgBottom from "../../assets/pictograms/FM-Emoji_ohneRand57.png";
import RobiGif from "../../components/RobiGif";
import robiLookaround from "../../assets/robi-gifs/Robi_lookaround-min.gif";

function Screen({ onSubmit, data }) {
  return (
    <>
      <div>
        <p>Wie fandest du die Betreuung im Fabmobil?</p>
      </div>
      <FabSlider imgTop={imgTop} imgBottom={imgBottom} onChange={onSubmit} />
      <RobiGif
        src={robiLookaround}
        style={{ width: 500, top: 100, right: -340 }}
      />
      <WeiterButton navigateTo="/wiewars/dreiDDruck" />
    </>
  );
}

export default Screen;
