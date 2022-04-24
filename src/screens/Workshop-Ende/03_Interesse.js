import { useNavigate } from "react-router-dom";
import Fabutton from "../../components/Fabutton";

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
        {ANSWER_OPTIONS.map((option) => (
          <Fabutton key={option} onClick={() => navigate(nextRoute)}>
            {option}
          </Fabutton>
        ))}
      </div>
    </>
  );
}

export default Screen;
