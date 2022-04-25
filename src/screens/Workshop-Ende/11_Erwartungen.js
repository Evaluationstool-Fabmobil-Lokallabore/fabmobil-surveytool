import FabSlider from "../../components/FabSlider";
import WeiterButton from "../../components/WeiterButton";
import heartEmoji from "../../assets/pictograms/herz.png";

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
    </>
  );
}
export default Screen;
