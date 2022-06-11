import { useNavigate } from "react-router-dom";
import SingleChoiceTool from "../../components/SingleChoiceTool";
import RobiGifFlex from "../../components/RobiGifFlex";
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
      <div>
        <p>Hättest du Lust dich in einem regelmäßigen Angebot zu engagieren?</p>
      </div>
      <RobiGifFlex
        src={robiSprung}
        style={{
          width: 391,
          left: -50,
          top: 100,
          backgroundSize: "contain",
          backgroundPosition: "left",
          backgroundRepeat: "repeat-x",
        }}
      />
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
    </>
  );
}

export default Screen;
