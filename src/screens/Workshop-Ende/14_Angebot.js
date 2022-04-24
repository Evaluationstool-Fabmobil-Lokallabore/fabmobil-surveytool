import { useNavigate } from "react-router-dom";
import Fabutton from "../../components/Fabutton";

const ANSWER_OPTIONS = [
  "Ja klar!",
  "Naja...gibts hier schon",
  "Nee...lass mal",
];

function Screen() {
  const navigate = useNavigate();
  const nextRoute = "/wiewars/engagieren";
  return (
    <>
      <div>
        <p>Hättest du gern ein regelmässiges Angebot wie das Fabmobil?</p>
      </div>
      <div className="vertical-grid">
        {ANSWER_OPTIONS.map((option) => (
          <Fabutton onClick={() => navigate(nextRoute)}>{option}</Fabutton>
        ))}
      </div>
    </>
  );
}

export default Screen;
