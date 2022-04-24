import { useNavigate } from "react-router-dom";
import Fabutton from "../../components/Fabutton";

const ANSWER_OPTIONS = [
  "Absolutes Lieblings-Tool",
  "Kann man schon machen",
  "Find ich nicht so spannend",
  "Nicht benutzt",
];

function Screen() {
  const navigate = useNavigate();
  const nextRoute = "/wiewars/3D-Modelling";
  return (
    <>
      <div>
        <p>Lasercutter....dein Ding?</p>
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
