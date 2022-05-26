import DoubleColumnContainer from "../../components/DoubleColumnContainer";
import MultipleChoiceTool from "../../components/MultipleChoiceTool";
import FabTextInput from "../../components/FabTextInput";
import WeiterButton from "../../components/WeiterButton";
import RobiGif from "../../components/RobiGif";
import robiTastatur from "../../assets/robi-gifs/Robi_tastatur-min.gif";

const ANSWER_OPTIONS = ["divers", "weiblich", "männlich", "keine Angabe"];

function getValueOfTextInput(options, data) {
  console.log(options, data);
  return "foobar";
  //data.forEach(ANSWER_OPTIONS.indexOf(data) > -1) ? "" : data
}

function Screen({ data, onSubmit }) {
  return (
    <>
      <div style={{ marginBottom: 203 }}>
        <p>
          Was hast du für ein <br /> Geschlecht?
        </p>
      </div>
      <DoubleColumnContainer>
        <MultipleChoiceTool
          options={ANSWER_OPTIONS}
          data={data}
          onChange={onSubmit}
        />
        <FabTextInput
          style={{ flex: 1 }}
          value={getValueOfTextInput(ANSWER_OPTIONS, data)}
          onChange={(val) => {
            onSubmit([...data, val]);
          }}
        />
      </DoubleColumnContainer>

      <WeiterButton navigateTo="/losgehts/besuch" />
      <RobiGif
        src={robiTastatur}
        style={{ width: 256, height: 256, left: 128, top: 106 }}
      />
    </>
  );
}

export default Screen;
