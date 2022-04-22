import FabTextinput from "../../components/FabTextinput";
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
      <FabTextinput style={{ marginTop: "auto", marginBottom: "auto" }} />
      <WeiterButton navigateTo="/spass" />
      <RobiGif src={robiAuftrittWinken} style={{ bottom: 0 }} />
    </>
  );
}

export default Screen;
