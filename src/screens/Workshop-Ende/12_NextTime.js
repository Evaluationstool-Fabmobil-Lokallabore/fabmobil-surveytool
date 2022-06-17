import WeiterButton from "../../components/WeiterButton";
import MultiplePictoChoice from "../../components/MultiplePictoChoiceTool";
import FABMOBIL_TECHNOLOGIES from "../../constants/fabmobil-technologies";

const column1 = [
  FABMOBIL_TECHNOLOGIES[0],
  FABMOBIL_TECHNOLOGIES[6],
  FABMOBIL_TECHNOLOGIES[3],
];
const column2 = [FABMOBIL_TECHNOLOGIES[1], FABMOBIL_TECHNOLOGIES[2]];
const column3 = [
  FABMOBIL_TECHNOLOGIES[7],
  FABMOBIL_TECHNOLOGIES[5],
  FABMOBIL_TECHNOLOGIES[4],
];

function Screen({ onSubmit, data }) {
  return (
    <>
      <div>
        <p>
          Damit ich es fürs nächste Mal weiss: Was würdest du das nächste Mal
          gerne ausprobieren?
        </p>
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
          style={{}}
          styles={[
            [{}, {}, {}],
            [{}, {}],
            [{}, {}, {}],
          ]}
        />
      </div>

      <WeiterButton navigateTo="/wiewars/atmo" />
    </>
  );
}

export default Screen;
