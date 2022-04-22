import WeiterButton from "../../components/WeiterButton";
import RobiGif from "../../components/RobiGif";

function Screen() {
  return (
    <>
      <div>
        <p>
          So. Dann kannst du dich endlich der ganzen abgefahrenen Technik im
          Fabmobil widmen.
        </p>
        <p>Viel Spass und bis später.</p>
        <RobiGif style={{ left: 0, bottom: 130 }} />
      </div>

      <WeiterButton text="fertig" navigateTo={"/"} />
    </>
  );
}

export default Screen;
