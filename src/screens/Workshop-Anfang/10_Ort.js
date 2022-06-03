import { useNavigate } from "react-router-dom";
import SingleChoiceTool from "../../components/SingleChoiceTool";
import RobiGif from "../../components/RobiGif";
import robiLongarmslide from "../../assets/robi-gifs/Robi_longarmslide-min.gif";

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
      <div>
        <p>Wo bist du gerade?</p>
      </div>

      <div className="vertical-grid">
        <SingleChoiceTool
          options={ANSWER_OPTIONS}
          answer={data}
          onSelect={(answer) => {
            onSubmit(answer);
            setTimeout(() => navigate(nextRoute), 500);
          }}
        />
      </div>

      <RobiGif
        src={robiLongarmslide}
        style={{ right: -300, top: -20, transform: "rotate(180deg)" }}
      />
    </>
  );
}

export default Screen;
