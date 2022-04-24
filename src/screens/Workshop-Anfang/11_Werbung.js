import Fabutton from "../../components/Fabutton";
import WeiterButton from "../../components/WeiterButton";
import RobiGif from "../../components/RobiGif";
import robiLongarmslide from "../../assets/robi-gifs/Robi_longarmslide-min.gif";

const ANSWER_OPTIONS = [
  "Freund*innen",
  "Verwandte",
  "Schule",
  "Sonstige",
  "Soziale Medien",
  "Soziokultureller Ort",
  "Festival",
  "Konkurrenz",
];

function Screen() {
  const nextRoute = "/losgehts/grund";
  return (
    <>
      <div>
        <p>Wie hast du vom Fabmobil gehört?</p>
      </div>
      <div className="vertical-grid">
        {ANSWER_OPTIONS.map((option) => (
          <Fabutton key={option}>{option}</Fabutton>
        ))}
      </div>
      <WeiterButton navigateTo={nextRoute} />
      <RobiGif src={robiLongarmslide} style={{ left: -300, top: 300 }} />
    </>
  );
}

export default Screen;
