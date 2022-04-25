import WeiterButton from "../../components/WeiterButton";
import MultiplePictoChoice from "../../components/MultiplePictoChoice";
import FABMOBIL_TECHNOLOGIES from "../../constants/fabmobil_technologies";

const ANSWER_OPTIONS = FABMOBIL_TECHNOLOGIES;

function Screen({ onSubmit, data }) {
  return (
    <>
      <div>
        <p>Verrätst du mir, was dich besonders interessiert?</p>
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
          options={ANSWER_OPTIONS}
          data={data}
          onChange={onSubmit}
          styles={[
            {},
            { position: "absolute", top: "50%", left: 0 },
            { position: "absolute", bottom: "-19%", left: 0 },
            { marginTop: "100%" },
            { position: "absolute", bottom: "15%", left: 0 },
            { marginTop: 20 },
            { position: "absolute", top: "50%", left: 0 },
            { position: "absolute", bottom: 0, left: 0 },
          ]}
        />
      </div>

      <WeiterButton navigateTo="/losgehts/vorerfahrung" />
    </>
  );
}

export default Screen;
