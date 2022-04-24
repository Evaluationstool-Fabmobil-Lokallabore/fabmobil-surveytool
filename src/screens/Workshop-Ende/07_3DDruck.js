import { useNavigate } from "react-router-dom";
import SingleChoice from "../../components/SingleChoice";

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
