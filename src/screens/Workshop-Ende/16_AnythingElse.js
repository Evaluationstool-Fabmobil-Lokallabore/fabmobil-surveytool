import FabTextArea from "../../components/FabTextArea";
import WeiterButton from "../../components/WeiterButton";
import RobiGif from "../../components/RobiGif";
import robiTastatur from "../../assets/robi-gifs/Robi_tastatur-min.gif";

function Screen({ onSubmit, data }) {
  return (
    <>
      <div>
        <p>Möchtest du mir noch was anderes sagen?</p>
      </div>
      <FabTextArea value={data} onChange={onSubmit} />
      <WeiterButton navigateTo="/wiewars/ende" />
      <RobiGif src={robiTastatur} style={{ width: 180, right: 0, top: 145 }} />
    </>
  );
}

export default Screen;
