import MultipleChoiceTool from "../../components/MultipleChoiceTool";
import WeiterButton from "../../components/WeiterButton";
import RobiGif from "../../components/RobiGif";
import robiTouch from "../../assets/robi-gifs/Robi_touch-min.gif";

const ANSWER_OPTIONS = [
  "Interesse digitale Technik",
  "Hauptsache was los",
  "Schulische Verpflichtung",
  "Wurde mitgeschleppt",
  "Soziale Medien",
];

function Screen({ onSubmit, data }) {
  return (
    <>
      <div>
        <p>So viele Fragen...Bald hast dus geschafft.</p>
        <p>Warum bist du heute hier? </p>
      </div>
      <div className="vertical-grid">
        <MultipleChoiceTool
          options={ANSWER_OPTIONS}
          onChange={onSubmit}
          data={data}
        />
      </div>
      <WeiterButton text="fertig" navigateTo="/losgehts/nickname" />
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
