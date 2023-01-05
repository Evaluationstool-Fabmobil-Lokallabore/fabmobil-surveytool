import FabTextInput from "../../components/FabTextInput";
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
      <p>
        Merke dir diesen Namen. <br /> Du wirst ihn am Ende des Workshops
        nochmal brauchen.
      </p>
      <FabTextInput value={data || ""} onChange={onSubmit} />
      <small>
        <ul>
          <li>Nur Kleinbuchstaben!</li>
          <li>Keine Zahlen / Sonderzeichen!</li>
          <li>Mindestens 2 Zeichen!</li>
          <li>Maximal 15 Zeichen!</li>
        </ul>
      </small>
      <WeiterButton
        enabled={hasUserAnswered()}
        navigateTo={"/losgehts/geburtstag"}
      />
    </>
  );
}

export default Screen;
