import FabSlider from "../../components/FabSlider";
import WeiterButton from "../../components/WeiterButton";
import heartEmoji from "../../assets/pictograms/herz.png";

function Screen() {
  return (
    <>
      <div>
        <p>Wurden deine Erwartungen im Fabmobil erfüllt?</p>
      </div>
      <FabSlider imgTop={heartEmoji} noBottomLabel />
      <WeiterButton navigateTo="/wiewars/next-time" />
    </>
  );
}
export default Screen;
