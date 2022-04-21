import FabTextinput from "../../components/FabTextinput";
import WeiterButton from "../../components/WeiterButton";

function Screen() {
  return (
    <>
      <div>
        <p>Was ist dein Nickname?</p>
      </div>
      <FabTextinput style={{ marginTop: "auto", marginBottom: "auto" }} />
      <p>
        (Merke dir diesen Namen. Du wirst ihn am Ende des Workshops nochmal
        brauchen.)
      </p>
      <WeiterButton />
    </>
  );
}

export default Screen;
