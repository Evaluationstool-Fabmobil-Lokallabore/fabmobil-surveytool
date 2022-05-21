import FabTextArea from "../../components/FabTextArea";
import WeiterButton from "../../components/WeiterButton";
import RobiGif from "../../components/RobiGif";
import robiLongarmtouch from "../../assets/robi-gifs/Robi_longarmtouch-min.gif";

function Screen({ data, onSubmit }) {
  return (
    <>
      <div style={{ marginBottom: 177 }}>
        <p>Welche Erwartungen hast du an deine Zeit bei uns im Fabmobil?</p>
      </div>
      <FabTextArea value={data} onChange={onSubmit} />
      <WeiterButton navigateTo="/losgehts/interesse" />
      <RobiGif
        src={robiLongarmtouch}
        style={{ width: 491, left: -123, top: 326 }}
      />
    </>
  );
}

export default Screen;
