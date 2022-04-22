import FabSlider from "../../components/FabSlider";
import WeiterButton from "../../components/WeiterButton";
import happyFabmobil from "../../assets/pictograms/fabmobil_happy.png";
import sadFabmobil from "../../assets/pictograms/fabmobil_sad.png";

function Screen() {
  return (
    <>
      <div>
        <p>Wie war die Atmosphäre im Fabmobil?</p>
      </div>
      <FabSlider imgTop={happyFabmobil} imgBottom={sadFabmobil} />
      <WeiterButton navigateTo="/angebot" />
    </>
  );
}

export default Screen;
