import { useNavigate } from "react-router-dom";
import Fabutton from "../../components/Fabutton";
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

function Screen() {
  const navigate = useNavigate();
  const nextRoute = "/losgehts/werbung";
  return (
    <>
      <div>
        <p>Wo bist du gerade?</p>
      </div>
      <div className="vertical-grid">
        {ANSWER_OPTIONS.map((option) => (
          <Fabutton onClick={() => navigate(nextRoute)}>{option}</Fabutton>
        ))}
      </div>
      <RobiGif
        src={robiLongarmslide}
        style={{ right: -300, top: -20, transform: "rotate(180deg)" }}
      />
    </>
  );
}

export default Screen;
