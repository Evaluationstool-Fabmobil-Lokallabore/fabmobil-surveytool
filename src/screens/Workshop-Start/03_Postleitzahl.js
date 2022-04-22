import FabTextinput from "../../components/FabTextinput";
import WeiterButton from "../../components/WeiterButton";
import RobiGif from "../../components/RobiGif";
import robiLongarmtouch from "../../assets/robi-gifs/Robi_longarmtouch-min.gif";

function Screen() {
  return (
    <>
      <div style={{ marginBottom: "auto" }}>
        <p>Und wie lautet deine Postleitzahl?</p>
      </div>
      <FabTextinput style={{ margin: "auto" }} />
      <WeiterButton navigateTo="/losgehts/geschlecht" />
      <RobiGif src={robiLongarmtouch} style={{ left: -100, bottom: 0 }} />
    </>
  );
}

export default Screen;
