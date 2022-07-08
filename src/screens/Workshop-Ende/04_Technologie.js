import WeiterButton from "../../components/WeiterButton";
import MultiplePictoChoice from "../../components/MultiplePictoChoiceTool";
import FABMOBIL_TECHNOLOGIES from "../../constants/fabmobil-technologies";

const ANSWER_OPTIONS = FABMOBIL_TECHNOLOGIES;
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
      <div>
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
