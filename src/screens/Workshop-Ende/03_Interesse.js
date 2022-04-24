import { useNavigate } from "react-router-dom";
import SingleChoice from "../../components/SingleChoice";
const ANSWER_OPTIONS = ["Ja voll", "Nö", "Hatte ich vorher schon"];

function Screen() {
  const navigate = useNavigate();
  const nextRoute = "/wiewars/technologie";
  return (
    <>
      <div>
        <p>
          Hat das Fabmobil dein Interesse für digitale Technologien geweckt?
        </p>
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
