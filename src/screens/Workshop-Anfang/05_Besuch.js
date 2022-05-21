import { useNavigate } from "react-router-dom";
import DoubleColumnContainer from "../../components/DoubleColumnContainer";
import SingleChoiceTool from "../../components/SingleChoiceTool";
import RobiGif from "../../components/RobiGif";
import robiTouch from "../../assets/robi-gifs/Robi_touch-min.gif";

const ANSWER_OPTIONS = [
  "noch nie",
  "erst einmal",
  "zweimal",
  "dreimal",
  "Ich gehöre fast zur Crew",
];

function Screen({ data, onSubmit }) {
  const navigate = useNavigate();
  const nextRoute = "/losgehts/erwartungen";
  return (
    <>
      <div>
        <p>
          Konntest du schon mal <br /> im Fabmobil <br /> rumexperimentieren?
        </p>
      </div>
      <div style={{ marginTop: 200 }}>
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
        <RobiGif
          src={robiTouch}
          style={{
            width: 405,
            height: 405,
            left: 100,
            top: 22,
            transform: "rotate(-165deg)",
          }}
        />
      </div>
    </>
  );
}

export default Screen;
