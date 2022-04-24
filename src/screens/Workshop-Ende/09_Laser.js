import { useNavigate } from "react-router-dom";
import SingleChoice from "../../components/SingleChoice";

const ANSWER_OPTIONS = [
  "Absolutes Lieblings-Tool",
  "Kann man schon machen",
  "Find ich nicht so spannend",
  "Nicht benutzt",
];

function Screen() {
  const navigate = useNavigate();
  const nextRoute = "/wiewars/3D-Modelling";
  return (
    <>
      <div>
        <p>Lasercutter....dein Ding?</p>
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
