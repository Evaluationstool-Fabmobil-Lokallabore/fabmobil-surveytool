import { useNavigate } from "react-router-dom";
import FabTextInput from "../../components/FabTextInput";
import SubmitButton from "../../components/SubmitButton";
import RobiGifFlex from "../../components/RobiGifFlex";
import robiTastatur from "../../assets/robi-gifs/Robi_tastatur-min.gif";

function Screen({ onSubmit, onFinalSubmit, data }) {
  const hasUserAnswered = () => {
    if (!data || data.length < 1) return false;
    return true;
  };
  const navigate = useNavigate();
  return (
    <>
      <div>
        <p>Was ist dein Nickname?</p>
      </div>
      <RobiGifFlex src={robiTastatur} style={{ maxHeight: 500 }} />
      <FabTextInput value={data || ""} onChange={onSubmit} />
      <p>
        (Merke dir diesen Namen. <br /> Du wirst ihn am Ende des Workshops
        nochmal brauchen.)
      </p>
      <SubmitButton
        enabled={hasUserAnswered()}
        onClick={() => {
          onFinalSubmit();
          setTimeout(() => navigate("/losgehts/ende"), 500);
        }}
      />
    </>
  );
}

export default Screen;
