import MultipleChoiceTool from "../../components/MultipleChoiceTool";
import WeiterButton from "../../components/WeiterButton";
import RobiGif from "../../components/RobiGif";
import robiTouch from "../../assets/robi-gifs/Robi_touch-min.gif";
import VerticalGrid from "../../components/VerticalGrid";
import BackButton from "../../components/BackButton";

const ANSWER_OPTIONS = [
  "Interesse digitale Technik",
  "Hauptsache was los",
  "Schulische Verpflichtung",
  "Wurde mitgeschleppt",
  "Soziale Medien",
];

function Screen({ onSubmit, data }) {
  function hasUserAnswered() {
    if (data && data.length > 0) {
      return true;
    }
    return false;
  }
  return (
    <>
      <div className="question-and-back">
        <BackButton />
        <div>
          <p>So viele Fragen...Bald hast dus geschafft.</p>
          <p>Warum bist du heute hier? </p>
        </div>
      </div>
      <VerticalGrid>
        <MultipleChoiceTool
          options={ANSWER_OPTIONS}
          onChange={onSubmit}
          data={data}
        />
      </VerticalGrid>
      <WeiterButton
        text="fertig"
        enabled={hasUserAnswered()}
        navigateTo="/losgehts/nickname"
      />
      <RobiGif
        src={robiTouch}
        style={{
          width: 500,
          left: -194,
          bottom: -358,
        }}
      />
    </>
  );
}

export default Screen;
