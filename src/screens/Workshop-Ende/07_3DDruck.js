import { useNavigate } from "react-router-dom";
import Fabutton from "../../components/Fabutton";

const ANSWER_OPTIONS = [
  "Mega! Ich liebs",
  "So mittel",
  "Fand ich nicht so cool...",
  "Nicht benutzt",
];

function Screen() {
  const navigate = useNavigate();
  const nextRoute = "/wiewars/vr";
  return (
    <>
      <div>
        <p>Wie spannend findest du 3D-Druck?</p>
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
