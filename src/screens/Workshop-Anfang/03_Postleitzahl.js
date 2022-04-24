import FabTextInput from "../../components/FabTextInput";
import WeiterButton from "../../components/WeiterButton";
import RobiGif from "../../components/RobiGif";
import robiLongarmtouch from "../../assets/robi-gifs/Robi_longarmtouch-min.gif";

function Screen() {
  return (
    <>
      <div>
        <p>Und wie lautet deine Postleitzahl?</p>
      </div>
      <div className="flex-vertical-center">
        <FabTextInput
          minlength="5"
          maxlength="5"
          pattern={/[0-9]{5}/}
          onChange={(event) => this.onChange(event.target.value)}
        />
      </div>
      <WeiterButton navigateTo="/losgehts/geschlecht" />
      <RobiGif src={robiLongarmtouch} style={{ left: -100, bottom: 0 }} />
    </>
  );
}

export default Screen;
