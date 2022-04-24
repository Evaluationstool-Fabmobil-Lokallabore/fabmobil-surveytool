import { useNavigate } from "react-router-dom";
import Fabutton from "../../components/Fabutton";
import DoubleColumnContainer from "../../components/DoubleColumnContainer";
import RobiGif from "../../components/RobiGif";
import robiLookaround from "../../assets/robi-gifs/Robi_lookaround-min.gif";

const ANSWER_OPTIONS = ["0-12", "13-16", "17-20", "21-24", "25-99", "99+"];

function Screen() {
  const navigate = useNavigate();
  const nextRoute = "/losgehts/postleitzahl";
  return (
    <>
      <div style={{ marginBottom: "auto" }}>
        <p>Wie alt bist du denn?</p>
      </div>
      <DoubleColumnContainer style={{ marginBottom: 126 }}>
        {ANSWER_OPTIONS.map((option) => (
          <Fabutton key={option} onClick={() => navigate(nextRoute)}>
            {option}
          </Fabutton>
        ))}
      </DoubleColumnContainer>
      <RobiGif src={robiLookaround} style={{ top: -10 }} />
    </>
  );
}

export default Screen;
