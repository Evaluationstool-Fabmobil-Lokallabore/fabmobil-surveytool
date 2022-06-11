import WeiterButton from "../../components/WeiterButton";
import RobiGifFlex from "../../components/RobiGifFlex";

function Screen() {
  return (
    <>
      <div>
        <p>
          So. Dann kannst du dich endlich der ganzen abgefahrenen Technik im
          Fabmobil widmen.
        </p>
        <p>Viel Spass und bis später.</p>
      </div>
      <RobiGifFlex style={{ marginTop: -100 }} />
      <WeiterButton text="fertig" navigateTo={"/"} />
    </>
  );
}

export default Screen;
