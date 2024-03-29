import WeiterButton from "../../components/WeiterButton";
import MultiplePictoChoiceTool from "../../components/MultiplePictoChoiceTool";
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
        <p>Verrätst du mir, was dich besonders interessiert?</p>
      </div>

      <MultiplePictoChoiceTool
        options={[column1, column2, column3]}
        data={data}
        onChange={onSubmit}
        style={{ marginBottom: 0 }}
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

      <WeiterButton navigateTo="/losgehts/vorerfahrung" />
    </>
  );
}

export default Screen;
