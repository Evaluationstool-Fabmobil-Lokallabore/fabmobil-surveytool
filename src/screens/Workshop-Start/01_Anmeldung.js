import WeiterButton from "../../components/WeiterButton";

function Screen() {
  return (
    <>
      <div style={{ marginBottom: "auto" }}>
        <p>
          Hei du! <br /> Willkommen!
        </p>
        <p>Cool, dass du den Weg ins Fabmobil gefunden hast.️</p>
        <p>
          Bevor du all die spannende Technik hier ausprobieren kannst, habe ich
          noch ein paar Fragen für dich, okay?
        </p>
      </div>
      <WeiterButton text="klar" navigateTo="/alter" />
    </>
  );
}

export default Screen;
