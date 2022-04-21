import FabTextinput from "../../components/FabTextinput";
import WeiterButton from "../../components/WeiterButton";

function Screen() {
  return (
    <>
      <div>
        <p>Welche Erwartungen hast du an deine Zeit bei uns im Fabmobil?</p>
      </div>
      <FabTextinput style={{ marginTop: "auto", marginBottom: "auto" }} />
      <WeiterButton />
    </>
  );
}

export default Screen;
