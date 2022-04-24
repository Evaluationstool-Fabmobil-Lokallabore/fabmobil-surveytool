import MultipleChoice from "../../components/MultipleChoice";
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

function Screen() {
  return (
    <>
      <div>
        <p>So viele Fragen...Bald hast dus geschafft.</p>
        <p>Warum bist du heute hier? </p>
      </div>
      <div className="vertical-grid">
        <MultipleChoice options={ANSWER_OPTIONS} />
      </div>
      <WeiterButton text="fertig" navigateTo="/losgehts/nickname" />
      <RobiGif
        src={robiTouch}
        style={{
          width: 500,
          left: -140,
          bottom: -300,
        }}
      />
    </>
  );
}

export default Screen;
