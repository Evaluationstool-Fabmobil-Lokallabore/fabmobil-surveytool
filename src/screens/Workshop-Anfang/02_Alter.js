import { useNavigate } from "react-router-dom";
import SingleChoiceTool from "../../components/SingleChoiceTool";
import DoubleColumnContainer from "../../components/DoubleColumnContainer";
import RobiGif from "../../components/RobiGif";
import robiLookaround from "../../assets/robi-gifs/Robi_lookaround-min.gif";

const ANSWER_OPTIONS = ["0-12", "13-16", "17-20", "21-24", "25-99", "99+"];
const nextRoute = "/losgehts/postleitzahl";

function Screen({ data, onSubmit }) {
  const navigate = useNavigate();
  return (
    <>
      <div style={{ marginBottom: "auto" }}>
        <p>Wie alt bist du denn?</p>
      </div>
      <DoubleColumnContainer style={{}}>
        <SingleChoiceTool
          options={ANSWER_OPTIONS}
          answer={data}
          onSelect={(value) => {
            onSubmit(value);
            setTimeout(() => navigate(nextRoute), 500);
          }}
        />
      </DoubleColumnContainer>
      <RobiGif src={robiLookaround} style={{ width: 417, top: 19 }} />
    </>
  );
}

export default Screen;
