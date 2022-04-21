import FabTextinput from "../../components/FabTextinput";
import WeiterButton from "../../components/WeiterButton";
import RobiGif from "../../components/RobiGif";
import robiLongarmtouch from "../../assets/robi-gifs/Robi_longarmtouch-min.gif";

function Screen() {
  return (
    <>
      <div>
        <p>Welche Erwartungen hast du an deine Zeit bei uns im Fabmobil?</p>
      </div>
      <FabTextinput style={{ marginTop: "auto", marginBottom: "auto" }} />
      <WeiterButton />
      <RobiGif src={robiLongarmtouch} style={{ left: -100, bottom: 0 }} />
    </>
  );
}

export default Screen;
