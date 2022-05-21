import { useNavigate } from "react-router-dom";
import SingleChoiceTool from "../../components/SingleChoiceTool";
import RobiGif from "../../components/RobiGif";
import robiSprung from "../../assets/robi-gifs/Robi_sprung-min.gif";

const ANSWER_OPTIONS = [
  "Super gern!",
  "Nope - keine Zeit",
  "Nee... kein Interesse",
  "Könnt ich mir vorstellen...",
];

function Screen({ onSubmit, data }) {
  const navigate = useNavigate();
  const nextRoute = "/wiewars/anythingElse";
  return (
    <>
      <div style={{ marginBottom: 200 }}>
        <p>Hättest du Lust dich in einem regelmäßigen Angebot zu engagieren?</p>
      </div>
      <div className="vertical-grid">
        <SingleChoiceTool
          answer={data}
          options={ANSWER_OPTIONS}
          onSelect={(answer) => {
            onSubmit(answer);
            setTimeout(() => navigate(nextRoute), 500);
          }}
        />
      </div>
      <RobiGif
        src={robiSprung}
        style={{
          width: 391,
          left: -50,
          top: 100,
          transform: "rotate(7.4deg)",
        }}
      />
    </>
  );
}

export default Screen;
