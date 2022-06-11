import { useNavigate } from "react-router-dom";
import SingleChoiceTool from "../../components/SingleChoiceTool";
import RobiGifFlex from "../../components/RobiGifFlex";
import robiTastaturAgro from "../../assets/robi-gifs/Robi_tastatur_agro-min.gif";

const ANSWER_OPTIONS = ["Ja voll", "Nö", "Hatte ich vorher schon"];

function Screen({ onSubmit, data }) {
  const navigate = useNavigate();
  const nextRoute = "/wiewars/technologie";
  return (
    <>
      <div>
        <p>
          Hat das Fabmobil dein Interesse für digitale Technologien geweckt?
        </p>
      </div>
      <RobiGifFlex src={robiTastaturAgro} style={{ maxHeight: 200 }} />
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
