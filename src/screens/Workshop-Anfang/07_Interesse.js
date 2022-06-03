import WeiterButton from "../../components/WeiterButton";
import MultiplePictoChoiceTool from "../../components/MultiplePictoChoiceTool";
import FABMOBIL_TECHNOLOGIES from "../../constants/fabmobil-technologies";

const ANSWER_OPTIONS = FABMOBIL_TECHNOLOGIES;
const column1 = ANSWER_OPTIONS.slice(0, 3);
const column2 = ANSWER_OPTIONS.slice(3, 5);
const column3 = ANSWER_OPTIONS.slice(5, ANSWER_OPTIONS.length + 1);

function Screen({ onSubmit, data }) {
  return (
    <>
      <div>
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
            { top: "50%" }, //Plotter
            { bottom: -40 }, //Robo
          ],
          [
            { top: "20%" }, //Scan
            { bottom: "8%" }, //3D-Print
          ],
          [
            { top: "5%" }, //VR
            { top: "50%", left: 0 }, //Laser
            { bottom: 20, left: 0 }, //Stickmaschine
          ],
        ]}
      />

      <WeiterButton navigateTo="/losgehts/vorerfahrung" />
    </>
  );
}

export default Screen;
