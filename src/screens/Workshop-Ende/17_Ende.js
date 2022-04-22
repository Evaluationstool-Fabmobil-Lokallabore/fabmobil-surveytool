import WeiterButton from "../../components/WeiterButton";
import RobiGif from "../../components/RobiGif";

function Screen() {
  return (
    <>
      <div>
        <p>Danke dass du mir so viele Fragen beantwortet hast.</p>
        <p>Es war schön dich kennenzulernen.</p>
        <RobiGif style={{ left: 0, bottom: 130 }} />
      </div>

      <WeiterButton text="fertig" navigateTo={"/"} />
    </>
  );
}

export default Screen;
