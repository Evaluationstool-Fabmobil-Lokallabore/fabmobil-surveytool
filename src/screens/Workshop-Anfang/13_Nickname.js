import FabTextInput from "../../components/FabTextInput";
import RobiGifFlex from "../../components/RobiGifFlex";
import robiTastatur from "../../assets/robi-gifs/Robi_tastatur-min.gif";
import WeiterButton from "../../components/WeiterButton";
import BackButton from "../../components/BackButton";

function Screen({ onSubmit, data }) {
  const hasUserAnswered = () => {
    if (!data || data.length < 1) return false;
    return true;
  };
  return (
    <>
      <div className="question-and-back">
        <BackButton />
        <p>Was ist dein Nickname?</p>
      </div>
      <RobiGifFlex src={robiTastatur} style={{ maxHeight: 500 }} />
      <FabTextInput value={data || ""} onChange={onSubmit} />
      <p>
        (Merke dir diesen Namen. <br /> Du wirst ihn am Ende des Workshops
        nochmal brauchen.)
      </p>
      <WeiterButton enabled={hasUserAnswered()} navigateTo={"/losgehts/geburtstag"} />
    </>
  );
}

export default Screen;
