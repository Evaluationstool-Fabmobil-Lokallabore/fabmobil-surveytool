import { useNavigate } from "react-router-dom";
import FabTextArea from "../../components/FabTextArea";
import SubmitButton from "../../components/SubmitButton";
import RobiGif from "../../components/RobiGif";
import robiTastatur from "../../assets/robi-gifs/Robi_tastatur-min.gif";

function Screen({ onSubmit, onFinalSubmit, data }) {
  const navigate = useNavigate();

  return (
    <>
      <div style={{ marginBottom: 125 }}>
        <p>Möchtest du mir noch was anderes sagen?</p>
      </div>
      <FabTextArea value={data} onChange={onSubmit} />
      <SubmitButton
        onClick={() => {
          onFinalSubmit();
          setTimeout(() => navigate("/wiewars/ende"), 500);
        }}
      />
      <RobiGif src={robiTastatur} style={{ width: 180, right: 0, top: 145 }} />
    </>
  );
}

export default Screen;
