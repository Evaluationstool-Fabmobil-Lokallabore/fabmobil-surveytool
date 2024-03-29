import WeiterButton from "../../components/WeiterButton";
import MultiplePictoChoice from "../../components/MultiplePictoChoiceTool";
import FABMOBIL_TECHNOLOGIES from "../../constants/fabmobil-technologies";
import BackButton from "../../components/BackButton";

const ANSWER_OPTIONS = FABMOBIL_TECHNOLOGIES;
const column1 = ANSWER_OPTIONS.slice(0, 3);
const column2 = ANSWER_OPTIONS.slice(3, 6);
const column3 = ANSWER_OPTIONS.slice(6, ANSWER_OPTIONS.length + 1);

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
        <p>Welche Technologien hast du benutzt?</p>
      </div>
      <MultiplePictoChoice
        options={[column1, column2, column3]}
        data={data}
        onChange={onSubmit}
        styles={[
          [
            {}, //Tiefziehen
            {}, //Plotter
            {}, //Robo
          ],
          [
            {}, //Scan
            {}, //3D-Print
          ],
          [
            {}, //VR
            {}, //Laser
            {}, //Stickmaschine
          ],
        ]}
      />

      <WeiterButton
        navigateTo="/wiewars/programme"
        enabled={hasUserAnswered()}
      />
    </>
  );
}

export default Screen;
