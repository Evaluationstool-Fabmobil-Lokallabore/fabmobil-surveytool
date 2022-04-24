import { useNavigate } from "react-router-dom";
import DoubleColumnContainer from "../../components/DoubleColumnContainer";
import SingleChoice from "../../components/SingleChoice";
import RobiGif from "../../components/RobiGif";
import robiTouch from "../../assets/robi-gifs/Robi_touch-min.gif";

const ANSWER_OPTIONS = [
  "noch nie",
  "erst einmal",
  "zweimal",
  "dreimal",
  "Ich gehöre fast zur Crew",
];

function Screen() {
  const navigate = useNavigate();
  const nextRoute = "/losgehts/erwartungen";
  return (
    <>
      <div>
        <p>Konntest du schon Mal im Fabmobil rumexperimentieren?</p>
      </div>
      <div style={{ marginTop: 200 }}>
        <DoubleColumnContainer>
          <SingleChoice
            options={ANSWER_OPTIONS}
            onSelect={() => {
              setTimeout(() => navigate(nextRoute), 500);
            }}
          />
        </DoubleColumnContainer>
        <RobiGif
          src={robiTouch}
          style={{
            width: 405,
            right: -130,
            top: -20,
            transform: "rotate(194deg)",
          }}
        />
      </div>
    </>
  );
}

export default Screen;
