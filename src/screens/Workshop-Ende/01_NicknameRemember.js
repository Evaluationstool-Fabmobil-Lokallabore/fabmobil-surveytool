import FabTextInput from "../../components/FabTextInput";
import WeiterButton from "../../components/WeiterButton";
import RobiGif from "../../components/RobiGif";
import robiAuftrittWinken from "../../assets/robi-gifs/Robi_auftritt+winken-min.gif";

function Screen() {
  return (
    <>
      <div>
        <p>Willkommen zurück!</p>
        <p>Verrätst du mir deinen Nicknamen?</p>
      </div>
      <FabTextInput style={{ marginTop: "auto", marginBottom: "auto" }} />
      <WeiterButton navigateTo="/wiewars/spass" />
      <RobiGif src={robiAuftrittWinken} style={{ bottom: 0 }} />
    </>
  );
}

export default Screen;
