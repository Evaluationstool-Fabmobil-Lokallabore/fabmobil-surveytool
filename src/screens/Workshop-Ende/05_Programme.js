import WeiterButton from "../../components/WeiterButton";
import MultiplePictoChoiceTool from "../../components/MultiplePictoChoiceTool";
import FABMOBIL_PROGRAMS from "../../constants/fabmobil_programs";

const ANSWER_OPTIONS = FABMOBIL_PROGRAMS;

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
          options={ANSWER_OPTIONS}
          data={data}
          onChange={onSubmit}
          styles={[
            {},
            { position: "absolute", top: "50%", left: 0 },
            { position: "absolute", bottom: "9%", left: 0 },
            { marginTop: "100%" },
            { position: "absolute", bottom: "15%", left: 0 },
            { marginTop: 20 },
            { position: "absolute", top: "50%", left: 0 },
            { position: "absolute", bottom: 0, left: 0 },
          ]}
        />
      </div>

      <WeiterButton navigateTo="/wiewars/betreuung" />
    </>
  );
}

export default Screen;
