import DoubleColumnContainer from "../../components/DoubleColumnContainer";
import MultipleChoiceTool from "../../components/MultipleChoiceTool";
import FabTextInput from "../../components/FabTextInput";
import WeiterButton from "../../components/WeiterButton";
import SubmitButton from "../../components/SubmitButton";
import RobiGif from "../../components/RobiGif";
import robiTastatur from "../../assets/robi-gifs/Robi_tastatur-min.gif";

const ANSWER_OPTIONS = ["divers", "weiblich", "männlich", "keine Angabe"];

function Screen({ data, onSubmit }) {
  return (
    <>
      <div style={{ marginBottom: "auto" }}>
        <p>Was hast du für ein Geschlecht?</p>
      </div>
      <DoubleColumnContainer style={{ marginBottom: 126 }}>
        <MultipleChoiceTool
          options={ANSWER_OPTIONS}
          data={data}
          onChange={onSubmit}
        />
        <FabTextInput style={{ flex: 1 }} value={""} onChange={onSubmit} />
      </DoubleColumnContainer>

      <WeiterButton navigateTo="/losgehts/besuch" />
      <RobiGif src={robiTastatur} style={{ width: 180, right: 0, top: 145 }} />
    </>
  );
}

export default Screen;
