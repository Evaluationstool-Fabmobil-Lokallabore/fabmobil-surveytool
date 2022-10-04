import FabSlider from "../../components/FabSlider";
import WeiterButton from "../../components/WeiterButton";
import heartEmoji from "../../assets/pictograms/herz.png";
import RobiGif from "../../components/RobiGif";
import robiGoodBad from "../../assets/robi-gifs/Robi_goodbad-min.gif";
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
        <p>Wurden deine Erwartungen im Fabmobil erfüllt?</p>
      </div>
      <div className="flex-wrapper">
        <FabSlider
          imgTop={heartEmoji}
          noBottomLabel
          onChange={onSubmit}
          value={isNaN(data) ? 0 : data}
        />
        <RobiGif
          src={robiGoodBad}
          style={{
            position: "absolute",
            width: 391,
            left: -80,
            bottom: -92,
            transform: "rotate(7.4deg)",
          }}
        />
      </div>

      <WeiterButton
        navigateTo="/wiewars/nextTime"
        enabled={hasUserAnswered()}
      />
    </>
  );
}
export default Screen;
