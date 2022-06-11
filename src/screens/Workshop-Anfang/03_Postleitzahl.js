import FabTextInput from "../../components/FabTextInput";
import WeiterButton from "../../components/WeiterButton";
import RobiGif from "../../components/RobiGif";
import robiLongarmtouch from "../../assets/robi-gifs/Robi_longarmtouch-min.gif";

function Screen({ data, onSubmit }) {
  return (
    <>
      <div>
        <p>Und wie lautet deine Postleitzahl?</p>
      </div>
      <div className="flex-wrapper">
        <FabTextInput
          value={data}
          minLength="5"
          maxLength="5"
          pattern={/[0-9]{5}/}
          onChange={onSubmit}
        />
      </div>

      <WeiterButton navigateTo="/losgehts/geschlecht" />
      <RobiGif
        src={robiLongarmtouch}
        style={{ width: 491, left: -123, top: "42%" }}
      />
    </>
  );
}

export default Screen;
