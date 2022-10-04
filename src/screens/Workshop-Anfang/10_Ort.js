import { useNavigate } from "react-router-dom";
import VerticalGrid from "../../components/VerticalGrid";
import SingleChoiceTool from "../../components/SingleChoiceTool";
import RobiGif from "../../components/RobiGif";
import robiLongarmslide from "../../assets/robi-gifs/Robi_longarmslide-min.gif";
import BackButton from "../../components/BackButton";

const ANSWER_OPTIONS = [
  "Grundschule",
  "Förderschule",
  "Oberschule",
  "Gymnasium",
  "Berufsschule",
  "Soziokultureller Ort",
  "Festival",
  "Konferenz",
  "Aktionstage",
  "Andere",
];

const nextRoute = "/losgehts/werbung";

function Screen({ onSubmit, data }) {
  const navigate = useNavigate();
  return (
    <>
      <div className="question-and-back">
        <BackButton />
        <p>Wo bist du gerade?</p>
      </div>

      <VerticalGrid>
        <SingleChoiceTool
          options={ANSWER_OPTIONS}
          answer={data}
          onSelect={(answer) => {
            onSubmit(answer);
            setTimeout(() => navigate(nextRoute), 500);
          }}
        />
      </VerticalGrid>

      <RobiGif
        src={robiLongarmslide}
        style={{ right: -300, top: -20, transform: "rotate(180deg)" }}
      />
    </>
  );
}

export default Screen;
