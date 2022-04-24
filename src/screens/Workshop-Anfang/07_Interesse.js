import WeiterButton from "../../components/WeiterButton";
import ClickablePicto from "../../components/ClickablePicto";
import FABMOBIL_TECHNOLOGIES from "../../constants/fabmobil_technologies";

const ANSWER_OPTIONS = FABMOBIL_TECHNOLOGIES;

function Screen() {
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
        <div style={{ position: "relative" }}>
          <ClickablePicto src={ANSWER_OPTIONS[0].picto} />
          <ClickablePicto
            src={ANSWER_OPTIONS[1].picto}
            style={{ position: "absolute", top: "50%", left: 0 }}
          />
          <ClickablePicto
            src={ANSWER_OPTIONS[2].picto}
            style={{ position: "absolute", bottom: "-19%", left: 0 }}
          />
        </div>
        <div style={{ position: "relative" }}>
          <ClickablePicto
            src={ANSWER_OPTIONS[3].picto}
            style={{ marginTop: "100%" }}
          />
          <ClickablePicto
            src={ANSWER_OPTIONS[4].picto}
            style={{ position: "absolute", bottom: "15%", left: 0 }}
          />
        </div>
        <div style={{ position: "relative" }}>
          <ClickablePicto
            src={ANSWER_OPTIONS[5].picto}
            style={{ marginTop: 20 }}
          />
          <ClickablePicto
            src={ANSWER_OPTIONS[6].picto}
            style={{ position: "absolute", top: "50%", left: 0 }}
          />
          <ClickablePicto
            src={ANSWER_OPTIONS[7].picto}
            style={{ position: "absolute", bottom: 0, left: 0 }}
          />
        </div>
      </div>

      <WeiterButton navigateTo="/losgehts/vorerfahrung" />
    </>
  );
}

export default Screen;
