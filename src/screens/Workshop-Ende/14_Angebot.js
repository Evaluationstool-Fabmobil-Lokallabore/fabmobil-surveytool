import { useNavigate } from "react-router-dom";
import SingleChoiceTool from "../../components/SingleChoiceTool";
import RobiGifFlex from "../../components/RobiGifFlex";
import robiGoodBad from "../../assets/robi-gifs/Robi_onebuttons_langsam-min.gif";

const ANSWER_OPTIONS = [
  "Ja klar!",
  "Naja...gibts hier schon",
  "Nee...lass mal",
];

function Screen({ onSubmit, data }) {
  const navigate = useNavigate();
  const nextRoute = "/wiewars/engagieren";
  return (
    <>
      <div>
        <p>Hättest du gern ein regelmässiges Angebot wie das Fabmobil?</p>
      </div>
      <RobiGifFlex src={robiGoodBad} style={{ marginTop: -30 }} />
      <div className="vertical-grid">
        <SingleChoiceTool
          answer={data}
          options={ANSWER_OPTIONS}
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
