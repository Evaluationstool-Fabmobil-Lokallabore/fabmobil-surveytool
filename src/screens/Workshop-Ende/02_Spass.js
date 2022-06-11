import FabSlider from "../../components/FabSlider";
import WeiterButton from "../../components/WeiterButton";
import RobiGif from "../../components/RobiGif";
import robiLongarmslide from "../../assets/robi-gifs/Robi_longarmslide-min.gif";
import happyFabmobil from "../../assets/pictograms/FM-Emoji_ohneRand30.png";
import sadFabmobil from "../../assets/pictograms/FM-Emoji_ohneRand3.png";

function Screen({ onSubmit, data }) {
  console.log(data);
  return (
    <>
      <div>
        <p>Wie viel Spass hattest du während deiner Zeit im Fabmobil?</p>
      </div>
      <FabSlider
        value={data}
        onChange={onSubmit}
        imgTop={happyFabmobil}
        imgBottom={sadFabmobil}
      />
      <WeiterButton navigateTo="/wiewars/interesse" />
      <RobiGif
        src={robiLongarmslide}
        style={{
          width: 500,
          left: -300,
          top: "30%",
          transform: "rotate(68deg)",
        }}
      />
    </>
  );
}

export default Screen;
