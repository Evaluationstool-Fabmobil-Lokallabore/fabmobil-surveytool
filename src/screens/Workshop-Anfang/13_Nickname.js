import { useNavigate } from "react-router-dom";
import FabTextInput from "../../components/FabTextInput";
import SubmitButton from "../../components/SubmitButton";
import RobiGif from "../../components/RobiGif";
import robiTastatur from "../../assets/robi-gifs/Robi_tastatur-min.gif";

function Screen({ onSubmit, onFinalSubmit, data }) {
  const navigate = useNavigate();
  return (
    <>
      <div style={{ marginBottom: 229 }}>
        <p>Was ist dein Nickname?</p>
      </div>
      <FabTextInput value={data} onChange={onSubmit} />
      <p>
        (Merke dir diesen Namen. <br /> Du wirst ihn am Ende des Workshops
        nochmal brauchen.)
      </p>
      <SubmitButton
        onClick={() => {
          onFinalSubmit();
          setTimeout(() => navigate("/losgehts/ende"), 500);
        }}
      />
      <RobiGif src={robiTastatur} style={{ width: 237, left: 111, top: 165 }} />
    </>
  );
}

export default Screen;
