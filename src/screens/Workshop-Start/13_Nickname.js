import FabTextinput from "../../components/FabTextinput";
import WeiterButton from "../../components/WeiterButton";
import RobiGif from "../../components/RobiGif";
import robiTastatur from "../../assets/robi-gifs/Robi_tastatur-min.gif";

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
      <WeiterButton navigateTo="/ende" />
      <RobiGif src={robiTastatur} style={{ width: 237, left: 111, top: 145 }} />
    </>
  );
}

export default Screen;
