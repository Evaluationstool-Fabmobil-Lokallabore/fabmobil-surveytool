import WeiterButton from "../../components/WeiterButton";
import MultiplePictoChoiceTool from "../../components/MultiplePictoChoiceTool";
import FABMOBIL_PROGRAMS from "../../constants/fabmobil-programs";
import BackButton from "../../components/BackButton";

const ANSWER_OPTIONS = FABMOBIL_PROGRAMS;
const column1 = ANSWER_OPTIONS.slice(0, 3);
const column2 = ANSWER_OPTIONS.slice(3, 5);
const column3 = ANSWER_OPTIONS.slice(5, ANSWER_OPTIONS.length + 1);

function Screen({ onSubmit, data }) {
  function hasUserAnswered() {
    if (data && data.length > 0) {
      return true;
    }
    return false;
  }
  return (
    <>
      <div className="question-and-back">
        <BackButton />
        <p>Was hast du ausprobiert? </p>
      </div>

      <MultiplePictoChoiceTool
        options={[column1, column2, column3]}
        data={data}
        onChange={onSubmit}
        style={{}}
        styles={[
          [
            {}, //Tiefziehen
            {}, //Calliope
            {}, //SculptGL
          ],
          [
            {}, //Blender
            {}, //TinkerCAD
          ],
          [
            {}, //Arduino
            {}, //Inkscape
          ],
        ]}
      />
      <WeiterButton
        navigateTo="/wiewars/betreuung"
        enabled={hasUserAnswered()}
      />
    </>
  );
}

export default Screen;
