import { useNavigate } from "react-router-dom";
import FabTextInput from "../../components/FabTextInput";
import SubmitButton from "../../components/SubmitButton";
import BackButton from "../../components/BackButton";
import VerticalGrid from "../../components/VerticalGrid";


function Screen({ onSubmit, onNicknameSubmit, onFinalSubmit, data }) {
  const hasUserAnswered = () => {
    if (!data || !data.day || !data.month || !data.year) return false;
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
        <FabTextInput pattern="[0-9]{2}"
          maxLength={2} placeholder="Tag" value={(data && data.day) || ""} onChange={(val) => onSubmit({ ...data, day: val })} />
        <FabTextInput pattern="[0-9]{2}"
          maxLength={2} placeholder="Monat" value={(data && data.month) || ""} onChange={(val) => onSubmit({ ...data, month: val })} />
        <FabTextInput pattern="[0-9]{4}"
          maxLength={4} placeholder="Jahr" value={(data && data.year) || ""} onChange={(val) => onSubmit({ ...data, year: val })} />
      </VerticalGrid>
      <SubmitButton
        enabled={hasUserAnswered()}
        onClick={async () => {
          try {
            await onNicknameSubmit(); //create new user
          } catch {
            window.setTimeout(() => {
              navigate("/losgehts/nickname");
            }, 100);
            return;
          }
          try {
            window.setTimeout(async () => await onFinalSubmit(), 300); //FIX: dirty workaround because React asynchronous state update..
            navigate("/losgehts/ende")
          }
          catch {
            alert("Etwas ist schiefgelaufen!")
          }
        }}
      />
    </>
  );
}

export default Screen;
