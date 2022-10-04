import { useNavigate } from "react-router-dom";
import FabTextArea from "../../components/FabTextArea";
import SubmitButton from "../../components/SubmitButton";
import RobiGifFlex from "../../components/RobiGifFlex";
import robiTastatur from "../../assets/robi-gifs/Robi_tastatur-min.gif";
import BackButton from "../../components/BackButton";

function Screen({ onSubmit, onFinalSubmit, data }) {
  const navigate = useNavigate();

  return (
    <>
      <div className="question-and-back">
        <BackButton />
        <p>Möchtest du mir noch was anderes sagen?</p>
      </div>
      <RobiGifFlex src={robiTastatur} />
      <div className="flex-wrapper">
        <FabTextArea
          value={data}
          onChange={onSubmit}
          style={{ marginBottom: "auto" }}
        />
      </div>
      <SubmitButton
        onClick={() => {
          onFinalSubmit();
          setTimeout(() => navigate("/wiewars/ende"), 500);
        }}
      />
    </>
  );
}

export default Screen;
