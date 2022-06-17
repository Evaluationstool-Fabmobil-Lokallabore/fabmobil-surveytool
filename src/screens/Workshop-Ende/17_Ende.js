import WeiterButton from "../../components/WeiterButton";
import RobiGifFlex from "../../components/RobiGifFlex";

function Screen() {
  return (
    <>
      <div>
        <p>Danke dass du mir so viele Fragen beantwortet hast.</p>
        <p>Es war schön dich kennenzulernen.</p>
      </div>
      <RobiGifFlex style={{ marginTop: -130, maxHeight: 500 }} />
      <WeiterButton text="fertig" navigateTo={"/"} />
    </>
  );
}

export default Screen;
