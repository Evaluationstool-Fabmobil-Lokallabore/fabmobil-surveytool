import { useNavigate } from "react-router-dom";
import SingleChoice from "../../components/SingleChoice";

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
        <SingleChoice
          options={ANSWER_OPTIONS}
          onSelect={() => {
            setTimeout(() => navigate(nextRoute), 500);
          }}
        />
      </div>
    </>
  );
}

export default Screen;
