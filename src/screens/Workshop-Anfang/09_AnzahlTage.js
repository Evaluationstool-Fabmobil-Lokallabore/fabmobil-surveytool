import { useNavigate } from "react-router-dom";
import SingleChoiceTool from "../../components/SingleChoiceTool";
import DoubleColumnContainer from "../../components/DoubleColumnContainer";
import RobiGif from "../../components/RobiGif";
import robiSprung from "../../assets/robi-gifs/Robi_sprung-min.gif";
import BackButton from "../../components/BackButton";

const ANSWER_OPTIONS = [1, 2, 3, 4, 5];
const nextRoute = "/losgehts/ort";

function Screen({ onSubmit, data }) {
  const navigate = useNavigate();
  return (
    <>
      <div className="question-and-back">
        <BackButton />
        <div>
          <p>Sweet. Du hast bereits die Hälfte meiner Fragen beantwortet. </p>
          <p>Wie viele Tage darfst du im Fabmobil verbringen?</p>
        </div>
      </div>
      <div className="flex-vertical-center">
        <DoubleColumnContainer>
          <SingleChoiceTool
            options={ANSWER_OPTIONS}
            answer={data}
            onSelect={(answer) => {
              onSubmit(answer);
              setTimeout(() => navigate(nextRoute), 500);
            }}
          />
        </DoubleColumnContainer>
      </div>
      <RobiGif src={robiSprung} style={{ left: -100, bottom: -92 }} />
    </>
  );
}

export default Screen;
