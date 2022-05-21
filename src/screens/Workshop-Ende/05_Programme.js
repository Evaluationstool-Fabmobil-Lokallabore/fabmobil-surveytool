import WeiterButton from "../../components/WeiterButton";
import MultiplePictoChoiceTool from "../../components/MultiplePictoChoiceTool";
import FABMOBIL_PROGRAMS from "../../constants/fabmobil_programs";

const ANSWER_OPTIONS = FABMOBIL_PROGRAMS;
const column1 = ANSWER_OPTIONS.slice(0, 3);
const column2 = ANSWER_OPTIONS.slice(3, 5);
const column3 = ANSWER_OPTIONS.slice(5, ANSWER_OPTIONS.length + 1);

function Screen({ onSubmit, data }) {
  return (
    <>
      <div>
        <p>Was hast du ausprobiert? </p>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flex: 1,
          position: "relative",
        }}
      >
        <MultiplePictoChoiceTool
          options={[column1, column2, column3]}
          data={data}
          onChange={onSubmit}
          style={{ marginBottom: 130 }}
          styles={[
            [
              {}, //Tiefziehen
              { top: "50%" }, //Plotter
              { bottom: "-19%" }, //Robo
            ],
            [
              { top: "20%" }, //Scan
              { bottom: "8%" }, //3D-Print
            ],
            [
              { top: "5%" }, //VR
              { top: "50%", left: 0 }, //Laser
              { bottom: 0, left: 0 }, //Stickmaschine
            ],
          ]}
        />
      </div>

      <WeiterButton navigateTo="/wiewars/betreuung" />
    </>
  );
}

export default Screen;
