import FabTextinput from "../../components/FabTextinput";
import WeiterButton from "../../components/WeiterButton";

function Screen() {
  return (
    <>
      <div>
        <p>Möchtest du mir noch was anderes sagen?</p>
      </div>
      <FabTextinput style={{ marginTop: "auto", marginBottom: "auto" }} />
      <WeiterButton navigateTo="/ende2" />
    </>
  );
}

export default Screen;
