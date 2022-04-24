import { useNavigate } from "react-router-dom";
import Fabutton from "../../components/Fabutton";

const ANSWER_OPTIONS = [
  "Super gern!",
  "Nope - keine Zeit",
  "Nee... kein Interesse",
  "Könnt ich mir vorstellen...",
];

function Screen() {
  const navigate = useNavigate();
  const nextRoute = "/wiewars/anything-else";
  return (
    <>
      <div>
        <p>Hättest du Lust dich in einem regelmäßigen Angebot zu engagieren?</p>
      </div>
      <div className="vertical-grid">
        {ANSWER_OPTIONS.map((option) => (
          <Fabutton key={option} onClick={() => navigate(nextRoute)}>
            {option}
          </Fabutton>
        ))}
      </div>
    </>
  );
}

export default Screen;
