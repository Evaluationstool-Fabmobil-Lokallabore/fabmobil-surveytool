import { useNavigate } from "react-router-dom";
import DoubleColumnContainer from "../../components/DoubleColumnContainer";
import SingleChoiceTool from "../../components/SingleChoiceTool";
import RobiGif from "../../components/RobiGif";
import RobiGifFlex from "../../components/RobiGifFlex";
import robiTouch from "../../assets/robi-gifs/Robi_touch-min.gif";

const ANSWER_OPTIONS = [
  "noch nie",
  "erst einmal",
  "zweimal",
  "dreimal",
  "Ich gehöre fast zur Crew",
];

const nextRoute = "/losgehts/erwartungen";

function Screen({ data, onSubmit }) {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <p>
          Konntest du schon mal <br /> im Fabmobil <br /> rumexperimentieren?
        </p>
      </div>
      <RobiGifFlex
        src={robiTouch}
        style={{
          marginTop: -160,
          transform: "rotate(-165deg) translate(-49vw, 0)",
        }}
      />
      <div style={{ marginTop: "auto" }}>
        <DoubleColumnContainer>
          <SingleChoiceTool
            options={ANSWER_OPTIONS}
            answer={data}
            onSelect={(value) => {
              onSubmit(value);
              setTimeout(() => navigate(nextRoute), 500);
            }}
          />
        </DoubleColumnContainer>
      </div>
    </>
  );
}

export default Screen;
