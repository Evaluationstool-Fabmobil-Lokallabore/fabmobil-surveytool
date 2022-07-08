import MultipleChoiceTool from "../../components/MultipleChoiceTool";
import WeiterButton from "../../components/WeiterButton";
import RobiGif from "../../components/RobiGif";
import robiLongarmslide from "../../assets/robi-gifs/Robi_longarmslide-min.gif";
import VerticalGrid from "../../components/VerticalGrid";

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
  function hasUserAnswered() {
    if (data && data.length > 0) {
      return true;
    }
    return false;
  }
  return (
    <>
      <div>
        <p>Wie hast du vom Fabmobil gehört?</p>
      </div>
      <VerticalGrid>
        <MultipleChoiceTool
          options={ANSWER_OPTIONS}
          data={data}
          onChange={onSubmit}
        />
      </VerticalGrid>
      <WeiterButton enabled={hasUserAnswered()} navigateTo={nextRoute} />
      <RobiGif src={robiLongarmslide} style={{ left: -300, top: 300 }} />
    </>
  );
}

export default Screen;
