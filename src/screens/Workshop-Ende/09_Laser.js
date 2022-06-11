import { useNavigate } from "react-router-dom";
import SingleChoiceTool from "../../components/SingleChoiceTool";
import RobiGifFlex from "../../components/RobiGifFlex";
import robiSlider from "../../assets/robi-gifs/Robi_slider-min.gif";

const ANSWER_OPTIONS = [
  "Absolutes Lieblings-Tool",
  "Kann man schon machen",
  "Find ich nicht so spannend",
  "Nicht benutzt",
];

function Screen({ onSubmit, data }) {
  const navigate = useNavigate();
  const nextRoute = "/wiewars/dreiDModelling";
  return (
    <>
      <div>
        <p>Lasercutter....dein Ding?</p>
      </div>
      <RobiGifFlex
        src={robiSlider}
        style={{ width: 204, left: 75, top: 195 }}
      />

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
    </>
  );
}

export default Screen;
