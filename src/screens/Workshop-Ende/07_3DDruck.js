import { useNavigate } from "react-router-dom";
import SingleChoiceTool from "../../components/SingleChoiceTool";
import RobiGif from "../../components/RobiGif";
import robiButtons from "../../assets/robi-gifs/Robi_buttons-min.gif";

const ANSWER_OPTIONS = [
  "Mega! Ich liebs",
  "So mittel",
  "Fand ich nicht so cool...",
  "Nicht benutzt",
];

function Screen({ onSubmit, data }) {
  const navigate = useNavigate();
  const nextRoute = "/wiewars/vr";
  return (
    <>
      <div style={{ marginBottom: 201 }}>
        <p>Wie spannend findest du 3D-Druck?</p>
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
      <RobiGif src={robiButtons} style={{ width: 220, left: 119, top: 171 }} />
    </>
  );
}

export default Screen;
