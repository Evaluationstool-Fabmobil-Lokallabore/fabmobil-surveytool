import { useNavigate } from "react-router-dom";
import SingleChoice from "../../components/SingleChoice";

const ANSWER_OPTIONS = [
  "Ja klar!",
  "Naja...gibts hier schon",
  "Nee...lass mal",
];

function Screen() {
  const navigate = useNavigate();
  const nextRoute = "/wiewars/engagieren";
  return (
    <>
      <div>
        <p>Hättest du gern ein regelmässiges Angebot wie das Fabmobil?</p>
      </div>
      <div className="vertical-grid">
        <SingleChoice
          options={ANSWER_OPTIONS}
          onSelect={() => {
            setTimeout(() => navigate(nextRoute), 500);
          }}
        />
      </div>
    </>
  );
}

export default Screen;
