import { useNavigate } from "react-router-dom";
import SingleChoiceTool from "../../components/SingleChoiceTool";
import RobiGifFlex from "../../components/RobiGifFlex";
import robiTastaturAgro from "../../assets/robi-gifs/Robi_tastatur_agro-min.gif";
import VerticalGrid from "../../components/VerticalGrid";
import BackButton from "../../components/BackButton";

const ANSWER_OPTIONS = ["Ja voll", "Nö", "Hatte ich vorher schon"];

function Screen({ onSubmit, data }) {
  const navigate = useNavigate();
  const nextRoute = "/wiewars/technologie";
  return (
    <>
      <div className="question-and-back">
        <BackButton />
        <p>
          Hat das Fabmobil dein Interesse für digitale Technologien geweckt?
        </p>
      </div>
      <RobiGifFlex src={robiTastaturAgro} style={{ maxHeight: 200 }} />
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
