import { useNavigate } from "react-router-dom";
import FabTextInput from "../../components/FabTextInput";
import SubmitButton from "../../components/SubmitButton";
import BackButton from "../../components/BackButton";
import VerticalGrid from "../../components/VerticalGrid";

const REGEX_TWO_DIGIT = /^[0-9]{2}$/;
const REGEX_FOUR_DIGIT = /^[0-9]{4}$/;

function Screen({ onSubmit, onNicknameSubmit, onFinalSubmit, data }) {
  const hasUserAnswered = () => {
    if (!data || !data.day || !data.month || !data.year) return false;
    if (
      !data.day.match(REGEX_TWO_DIGIT) ||
      !data.month.match(REGEX_TWO_DIGIT) ||
      !data.year.match(REGEX_FOUR_DIGIT)
    ) {
      return false;
    }
    return true;
  };
  const navigate = useNavigate();
  return (
    <>
      <div className="question-and-back">
        <BackButton />
        <p>Wann hast du Geburtstag?</p>
      </div>
      <VerticalGrid>
        <FabTextInput
          pattern="[0-9]{2}"
          maxLength={2}
          placeholder="31"
          value={(data && data.day) || ""}
          onChange={(val) => onSubmit({ ...data, day: val })}
        />
        <FabTextInput
          pattern="[0-9]{2}"
          maxLength={2}
          placeholder="01"
          value={(data && data.month) || ""}
          onChange={(val) => onSubmit({ ...data, month: val })}
        />
        <FabTextInput
          pattern="[0-9]{4}"
          maxLength={4}
          placeholder="2001"
          value={(data && data.year) || ""}
          onChange={(val) => onSubmit({ ...data, year: val })}
        />
        <small>
          <ul style={{ listStyle: "none" }}>
            <li>Oberes Feld = Tag (genau 2 Zahlen)</li>
            <li>Mittleres Feld = Monat (genau 2 Zahlen)</li>
            <li>Unteres Feld = Jahr (genau 4 Zahlen)</li>
          </ul>
        </small>
      </VerticalGrid>
      <SubmitButton
        enabled={hasUserAnswered()}
        onClick={async () => {
          try {
            await onNicknameSubmit(); //create new user
          } catch {
            window.setTimeout(() => {
              alert("Back to: Nickname");
              navigate("/losgehts/nickname");
            }, 100);
            return;
          }
          try {
            window.setTimeout(async () => await onFinalSubmit(), 300); //FIX: dirty workaround because React asynchronous state update..
            navigate("/losgehts/ende");
          } catch {
            alert("Etwas ist schiefgelaufen!");
          }
        }}
      />
    </>
  );
}

export default Screen;
