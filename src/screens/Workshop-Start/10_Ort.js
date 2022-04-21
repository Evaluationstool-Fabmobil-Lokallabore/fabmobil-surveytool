import Fabutton from "../../components/Fabutton";
import RobiGif from "../../components/RobiGif";
import robiLongarmslide from "../../assets/robi-gifs/Robi_longarmslide-min.gif";

function Screen() {
  return (
    <>
      <div>
        <p>Wo bist du gerade?</p>
      </div>
      <Fabutton>Grundschule</Fabutton>
      <Fabutton>Förderschule</Fabutton>
      <Fabutton>Oberschule</Fabutton>
      <Fabutton>Gymnasium</Fabutton>
      <Fabutton>Berufsschule</Fabutton>
      <Fabutton>Soziokultureller Ort</Fabutton>
      <Fabutton>Festival</Fabutton>
      <Fabutton>Konferenz</Fabutton>
      <Fabutton>Aktionstage</Fabutton>
      <Fabutton>Andere</Fabutton>

      <RobiGif
        src={robiLongarmslide}
        style={{ right: -300, top: -20, transform: "rotate(180deg)" }}
      />
    </>
  );
}

export default Screen;
