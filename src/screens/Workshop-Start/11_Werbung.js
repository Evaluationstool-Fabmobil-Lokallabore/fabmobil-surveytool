import Fabutton from "../../components/Fabutton";
import RobiGif from "../../components/RobiGif";
import robiLongarmslide from "../../assets/robi-gifs/Robi_longarmslide-min.gif";

function Screen() {
  return (
    <>
      <div>
        <p>Wie hast du vom Fabmobil gehört?</p>
      </div>
      <Fabutton>Freund*innen</Fabutton>
      <Fabutton>Verwandte</Fabutton>
      <Fabutton>Schule</Fabutton>
      <Fabutton>Sonstige</Fabutton>
      <Fabutton>Soziale Medien</Fabutton>
      <Fabutton>Soziokultureller Ort</Fabutton>
      <Fabutton>Festival</Fabutton>
      <Fabutton>Konkurrenz</Fabutton>
      <RobiGif src={robiLongarmslide} style={{ left: -300, top: 300 }} />
    </>
  );
}

export default Screen;
