import WeiterButton from "../../components/WeiterButton";
import RobiGif from "../../components/RobiGif";
import robiLongarmslide from "../../assets/robi-gifs/Robi_longarmslide-min.gif";

function Screen() {
  return (
    <>
      <div>
        <p>Wie viel Spass hattest du während deiner Zeit im Fabmobil?</p>
      </div>
      <WeiterButton navigateTo="/interesse2" />
      <RobiGif src={robiLongarmslide} style={{ left: -300, top: 300 }} />
    </>
  );
}

export default Screen;
