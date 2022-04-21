import FabTextinput from "../../components/FabTextinput";
import WeiterButton from "../../components/WeiterButton";

function Screen() {
  return (
    <>
      <div style={{ marginBottom: "auto" }}>
        <p>Und wie lautet deine Postleitzahl?</p>
      </div>
      <FabTextinput style={{ margin: "auto" }} />
      <WeiterButton />
    </>
  );
}

export default Screen;
