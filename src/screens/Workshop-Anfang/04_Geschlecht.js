import DoubleColumnContainer from "../../components/DoubleColumnContainer";
import MultipleChoiceTool from "../../components/MultipleChoiceTool";
import FabTextInput from "../../components/FabTextInput";
import WeiterButton from "../../components/WeiterButton";
import RobiGifFlex from "../../components/RobiGifFlex";
import robiTastatur from "../../assets/robi-gifs/Robi_tastatur-min.gif";

const ANSWER_OPTIONS = ["divers", "weiblich", "männlich", "keine Angabe"];

function changePredefinedValues(data, vals) {
  return { ...data, predefinedValues: vals };
}

function changeFreeValue(data, val) {
  return { ...data, freeValue: val };
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
      <div style={{ marginBottom: 0 }}>
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
        <FabTextInput
          style={{ flex: 1 }}
          value={(data && data.freeValue) || ""}
          onChange={(val) => onSubmit(changeFreeValue(data, val))}
        />
      </DoubleColumnContainer>

      <WeiterButton enabled={hasUserAnswered()} navigateTo="/losgehts/besuch" />
    </>
  );
}

export default Screen;
