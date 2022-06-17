import WeiterButton from "../../components/WeiterButton";
import MultiplePictoChoice from "../../components/MultiplePictoChoiceTool";
import FABMOBIL_TECHNOLOGIES from "../../constants/fabmobil-technologies";

const ANSWER_OPTIONS = FABMOBIL_TECHNOLOGIES;
const column1 = ANSWER_OPTIONS.slice(0, 3);
const column2 = ANSWER_OPTIONS.slice(3, 5);
const column3 = ANSWER_OPTIONS.slice(5, ANSWER_OPTIONS.length + 1);

function Screen({ onSubmit, data }) {
  return (
    <>
      <div>
        <p>Welche Technologien hast du benutzt?</p>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flex: 1,
          position: "relative",
        }}
      >
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
      </div>

      <WeiterButton navigateTo="/wiewars/programme" />
    </>
  );
}

export default Screen;
