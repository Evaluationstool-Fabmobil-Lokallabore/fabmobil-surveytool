import Fabutton from "../../components/Fabutton";
import WeiterButton from "../../components/WeiterButton";
import RobiGif from "../../components/RobiGif";
import robiLongarmslide from "../../assets/robi-gifs/Robi_longarmslide-min.gif";

function Screen() {
  const nextRoute = "/losgehts/grund";
  return (
    <>
      <div>
        <p>Wie hast du vom Fabmobil gehört?</p>
      </div>
      <div className="vertical-grid">
        <Fabutton>Freund*innen</Fabutton>
        <Fabutton>Verwandte</Fabutton>
        <Fabutton>Schule</Fabutton>
        <Fabutton>Sonstige</Fabutton>
        <Fabutton>Soziale Medien</Fabutton>
        <Fabutton>Soziokultureller Ort</Fabutton>
        <Fabutton>Festival</Fabutton>
        <Fabutton>Konkurrenz</Fabutton>
      </div>
      <WeiterButton navigateTo={nextRoute} />
      <RobiGif src={robiLongarmslide} style={{ left: -300, top: 300 }} />
    </>
  );
}

export default Screen;
