import { useNavigate } from "react-router-dom";
import SingleChoiceTool from "../../components/SingleChoiceTool";
import RobiGif from "../../components/RobiGif";
import robiTastaturAgro from "../../assets/robi-gifs/Robi_tastatur_agro-min.gif";

const ANSWER_OPTIONS = ["Ja voll", "Nö", "Hatte ich vorher schon"];

function Screen({ onSubmit, data }) {
  const navigate = useNavigate();
  const nextRoute = "/wiewars/technologie";
  return (
    <>
      <div style={{ marginBottom: 176 }}>
        <p>
          Hat das Fabmobil dein Interesse für digitale Technologien geweckt?
        </p>
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
      <RobiGif
        src={robiTastaturAgro}
        style={{ width: 200, left: 175, top: 182 }}
      />
    </>
  );
}

export default Screen;
