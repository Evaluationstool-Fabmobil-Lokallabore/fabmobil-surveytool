import { useNavigate } from "react-router-dom";
import SingleChoice from "../../components/SingleChoice";
import DoubleColumnContainer from "../../components/DoubleColumnContainer";
import RobiGif from "../../components/RobiGif";
import robiLookaround from "../../assets/robi-gifs/Robi_lookaround-min.gif";

const ANSWER_OPTIONS = ["0-12", "13-16", "17-20", "21-24", "25-99", "99+"];

function Screen({ data, onSubmit }) {
  const navigate = useNavigate();
  const nextRoute = "/losgehts/postleitzahl";
  return (
    <>
      <div style={{ marginBottom: "auto" }}>
        <p>Wie alt bist du denn?</p>
      </div>
      <DoubleColumnContainer style={{ marginBottom: 126 }}>
        <SingleChoice
          options={ANSWER_OPTIONS}
          answer={data}
          onSelect={(value) => {
            onSubmit(value);
            setTimeout(() => navigate(nextRoute), 500);
          }}
        />
      </DoubleColumnContainer>
      <RobiGif src={robiLookaround} style={{ top: -10 }} />
    </>
  );
}

export default Screen;
