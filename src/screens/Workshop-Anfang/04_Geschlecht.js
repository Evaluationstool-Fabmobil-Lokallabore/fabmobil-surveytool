import DoubleColumnContainer from "../../components/DoubleColumnContainer";
import MultipleChoiceTool from "../../components/MultipleChoiceTool";
import WeiterButton from "../../components/WeiterButton";
import RobiGifFlex from "../../components/RobiGifFlex";
import robiTastatur from "../../assets/robi-gifs/Robi_tastatur-min.gif";
import BackButton from "../../components/BackButton";

const ANSWER_OPTIONS = ["divers", "weiblich", "männlich", "keine Angabe"];

function changePredefinedValues(data, vals) {
  return { ...data, predefinedValues: vals };
}

function Screen({ data, onSubmit }) {
  function hasUserAnswered() {
    if (data && data.predefinedValues && data.predefinedValues.length > 0) {
      return true;
    }
    if (data && data.freeValue && data.freeValue.length > 0) {
      return true;
    }
    return false;
  }
  return (
    <>
      <div className="question-and-back" style={{ marginBottom: 0 }}>
        <BackButton />
        <p>
          Was hast du für ein <br /> Geschlecht?
        </p>
      </div>
      <RobiGifFlex src={robiTastatur} style={{ marginTop: -52 }} />
      <DoubleColumnContainer>
        <MultipleChoiceTool
          options={ANSWER_OPTIONS}
          data={(data && data.predefinedValues) || null}
          onChange={(vals) => onSubmit(changePredefinedValues(data, vals))}
        />
      </DoubleColumnContainer>

      <WeiterButton enabled={hasUserAnswered()} navigateTo="/losgehts/besuch" />
    </>
  );
}

export default Screen;
