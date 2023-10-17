import WeiterButton from "../../components/WeiterButton";
import MultiplePictoChoice from "../../components/MultiplePictoChoiceTool";
import FABMOBIL_TECHNOLOGIES from "../../constants/fabmobil-technologies";
import BackButton from "../../components/BackButton";

const ANSWER_OPTIONS = FABMOBIL_TECHNOLOGIES;
const column1 = ANSWER_OPTIONS.slice(0, 3);
const column2 = ANSWER_OPTIONS.slice(3, 6);
const column3 = ANSWER_OPTIONS.slice(6, ANSWER_OPTIONS.length + 1);

function Screen({ onSubmit, data }) {
  return (
    <>
      <div className="question-and-back">
        <BackButton />
        <p>
          Damit ich es fürs nächste Mal weiss: Was würdest du das nächste Mal
          gerne ausprobieren?
        </p>
      </div>
      <MultiplePictoChoice
        options={[column1, column2, column3]}
        data={data}
        onChange={onSubmit}
        style={{}}
        styles={[
          [{}, {}, {}],
          [{ marginBottom: "-20%" }, {}],
          [{}, {}, {}],
        ]}
      />
      <WeiterButton navigateTo="/wiewars/atmo" />
    </>
  );
}

export default Screen;
