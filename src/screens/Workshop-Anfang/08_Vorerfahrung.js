import WeiterButton from "../../components/WeiterButton";
import FABMOBIL_PROGRAMS from "../../constants/fabmobil-programs";
import MultiplePictoChoiceTool from "../../components/MultiplePictoChoiceTool";
import BackButton from "../../components/BackButton";

const ANSWER_OPTIONS = FABMOBIL_PROGRAMS;
const column1 = ANSWER_OPTIONS.slice(0, 3);
const column2 = ANSWER_OPTIONS.slice(3, 5);
const column3 = ANSWER_OPTIONS.slice(5, ANSWER_OPTIONS.length + 1);

function Screen({ onSubmit, data }) {
  return (
    <>
      <div className="question-and-back">
        <BackButton />
        <p>Welche Technologien hast du denn vor dem Kurs schon ausprobiert? </p>
      </div>

      <MultiplePictoChoiceTool
        options={[column1, column2, column3]}
        data={data}
        onChange={onSubmit}
        style={{ marginBottom: 0 }}
        styles={[
          [
            {}, //Tiltbrush
            {}, //Caliope
            {}, //SculptGL
          ],
          [
            {}, //Blender
            {}, //TinkerCAD
          ],
          [
            {}, //Arduino
            {}, //Incscape
          ],
        ]}
      />
      <WeiterButton navigateTo="/losgehts/anzahlTage" />
    </>
  );
}

export default Screen;
