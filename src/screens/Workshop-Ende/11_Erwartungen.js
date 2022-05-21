import FabSlider from "../../components/FabSlider";
import WeiterButton from "../../components/WeiterButton";
import heartEmoji from "../../assets/pictograms/herz.png";
import RobiGif from "../../components/RobiGif";
import robiGoodBad from "../../assets/robi-gifs/Robi_goodbad-min.gif";

function Screen({ onSubmit, data }) {
  return (
    <>
      <div>
        <p>Wurden deine Erwartungen im Fabmobil erfüllt?</p>
      </div>
      <FabSlider
        imgTop={heartEmoji}
        noBottomLabel
        onChange={onSubmit}
        value={isNaN(data) ? 0 : data}
      />
      <WeiterButton navigateTo="/wiewars/nextTime" />
      <RobiGif
        src={robiGoodBad}
        style={{
          width: 391,
          left: -50,
          bottom: -92,
          transform: "rotate(7.4deg)",
        }}
      />
    </>
  );
}
export default Screen;
