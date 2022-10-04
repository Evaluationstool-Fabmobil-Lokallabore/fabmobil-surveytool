import { useNavigate } from "react-router-dom";
import SingleChoiceTool from "../../components/SingleChoiceTool";
import RobiGifFlex from "../../components/RobiGifFlex";
import robiSlider from "../../assets/robi-gifs/Robi_slider-min.gif";
import VerticalGrid from "../../components/VerticalGrid";
import BackButton from "../../components/BackButton";

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
      <div className="question-and-back">
        <BackButton />
        <p>Lasercutter....dein Ding?</p>
      </div>
      <RobiGifFlex src={robiSlider} style={{ width: "100%", maxHeight: 300 }} />
      <VerticalGrid>
        <SingleChoiceTool
          options={ANSWER_OPTIONS}
          answer={data}
          onSelect={(answer) => {
            onSubmit(answer);
            setTimeout(() => navigate(nextRoute), 500);
          }}
        />
      </VerticalGrid>
    </>
  );
}

export default Screen;
