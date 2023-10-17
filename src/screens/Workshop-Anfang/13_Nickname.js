import FabTextInput from "../../components/FabTextInput";
import WeiterButton from "../../components/WeiterButton";
import BackButton from "../../components/BackButton";

const REGULAR_EXPRESSION = /^[a-z,ä,ö,ü,-]{2,15}$/;

function Screen({ onSubmit, data }) {
  const hasUserAnswered = () => {
    if (!data) return false;
    if (!data.match(REGULAR_EXPRESSION)) {
      return false;
    }
    return true;
  };
  return (
    <>
      <div className="question-and-back">
        <BackButton />
        <p>Was ist dein Vorname?</p>
      </div>
      <p>
        Merke dir diesen Namen. <br /> Du wirst ihn am Ende des Workshops
        nochmal brauchen.
      </p>
      <FabTextInput value={data || ""} onChange={onSubmit} />
      <small>
        <ul style={{ listStyle: "none" }}>
          <li>Nur Kleinbuchstaben!</li>
          <li>Keine Zahlen / Sonderzeichen!</li>
          <li>Bindestriche sind okay</li>
          <li>Keine Leerzeichen</li>
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
