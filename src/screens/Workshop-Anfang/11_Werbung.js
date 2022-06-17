import MultipleChoiceTool from "../../components/MultipleChoiceTool";
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

const nextRoute = "/losgehts/grund";

function Screen({ onSubmit, data }) {
  return (
    <>
      <div>
        <p>Wie hast du vom Fabmobil gehört?</p>
      </div>
      <div className="vertical-grid">
        <MultipleChoiceTool
          options={ANSWER_OPTIONS}
          data={data}
          onChange={onSubmit}
        />
      </div>
      <WeiterButton navigateTo={nextRoute} />
      <RobiGif src={robiLongarmslide} style={{ left: -300, top: 300 }} />
    </>
  );
}

export default Screen;
