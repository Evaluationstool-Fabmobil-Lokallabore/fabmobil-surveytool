import FabSlider from "../../components/FabSlider";
import WeiterButton from "../../components/WeiterButton";
import RobiGif from "../../components/RobiGif";
import robiLongarmslide from "../../assets/robi-gifs/Robi_longarmslide-min.gif";
import happyFabmobil from "../../assets/pictograms/fabmobil_happy.png";
import sadFabmobil from "../../assets/pictograms/fabmobil_sad.png";

function Screen() {
  return (
    <>
      <div>
        <p>Wie viel Spass hattest du während deiner Zeit im Fabmobil?</p>
      </div>
      <FabSlider imgTop={happyFabmobil} imgBottom={sadFabmobil} />
      <WeiterButton navigateTo="/wiewars/interesse" />
      <RobiGif src={robiLongarmslide} style={{ left: -300, top: 300 }} />
    </>
  );
}

export default Screen;
