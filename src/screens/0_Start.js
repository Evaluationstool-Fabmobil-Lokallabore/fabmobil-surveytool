import Fabutton from "../../components/Fabutton";

const text =
  "Hei du! Willkommen! Cool, dass du den Weg ins Fabmobil gefunden hast.️ /n Bevor du all die spannende Technik hier ausprobieren kannst, habe ich noch ein paar Fragen für dich, okay?";

function Screen() {
  return (
    <>
      {text}
      <Fabutton style={{ marginBottom: 26 }}>Workshop Start</Fabutton>
      <Fabutton>Workshop Ende</Fabutton>
    </>
  );
}

export default Screen;
