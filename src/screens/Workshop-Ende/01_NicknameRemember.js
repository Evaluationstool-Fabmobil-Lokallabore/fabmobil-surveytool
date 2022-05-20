import FabTextInput from "../../components/FabTextInput";
import WeiterButton from "../../components/WeiterButton";
import RobiGif from "../../components/RobiGif";
import robiAuftrittWinken from "../../assets/robi-gifs/Robi_auftritt+winken-min.gif";

function Screen({ onSubmit, data }) {
  return (
    <>
      <div>
        <p>Willkommen zurück!</p>
        <p>Verrätst du mir deinen Nicknamen?</p>
      </div>

      <FabTextInput
        value={data}
        onChange={onSubmit}
        style={{ marginTop: "auto", marginBottom: "auto" }}
      />

      <WeiterButton navigateTo="/wiewars/spass" />
      <RobiGif src={robiAuftrittWinken} style={{ bottom: 0 }} />
    </>
  );
}

export default Screen;
