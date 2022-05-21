import { useNavigate } from "react-router-dom";
import SingleChoiceTool from "../../components/SingleChoiceTool";
import RobiGif from "../../components/RobiGif";
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
      <div style={{ marginBottom: 177 }}>
        <p>Hättest du gern ein regelmässiges Angebot wie das Fabmobil?</p>
      </div>
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
      <RobiGif
        src={robiGoodBad}
        style={{
          width: 225,
          left: 167,
          top: 183,
        }}
      />
    </>
  );
}

export default Screen;
