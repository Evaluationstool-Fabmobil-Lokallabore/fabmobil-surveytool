import FabSlider from "../../components/FabSlider";
import WeiterButton from "../../components/WeiterButton";
import imgTop from "../../assets/pictograms/FM-Emoji_ohneRand58.png";
import imgBottom from "../../assets/pictograms/FM-Emoji_ohneRand57.png";
import RobiGif from "../../components/RobiGif";
import robiLookaround from "../../assets/robi-gifs/Robi_lookaround-min.gif";
import BackButton from "../../components/BackButton";

function Screen({ onSubmit, data }) {
  function hasUserAnswered() {
    if (typeof data === "number") {
      return true;
    }
    return false;
  }
  return (
    <>
      <div className="question-and-back">
        <BackButton />
        <p>Wie fandest du die Betreuung im Fabmobil?</p>
      </div>
      <FabSlider
        imgTop={imgTop}
        imgBottom={imgBottom}
        value={data}
        onChange={onSubmit}
      />
      <RobiGif
        src={robiLookaround}
        style={{ width: 500, top: "20%", right: -340 }}
      />
      <WeiterButton
        navigateTo="/wiewars/dreiDDruck"
        enabled={hasUserAnswered()}
      />
    </>
  );
}

export default Screen;
