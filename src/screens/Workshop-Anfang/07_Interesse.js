import WeiterButton from "../../components/WeiterButton";
import ClickablePicto from "../../components/ClickablePicto";
import pictoTiefzieh from "../../assets/pictograms/FM-Emoji_ohneRand12.png";
import pictoPlotter from "../../assets/pictograms/FM-Emoji_ohneRand21.png";
import pictoRobo from "../../assets/pictograms/FM-Emoji_ohneRand32.png";
import pictoScan from "../../assets/pictograms/FM-Emoji_ohneRand15.png";
import picto3DPrint from "../../assets/pictograms/FM-Emoji_ohneRand33.png";
import pictoVR from "../../assets/pictograms/FM-Emoji_ohneRand11.png";
import pictoLaser from "../../assets/pictograms/FM-Emoji_ohneRand34.png";
import pictoStickmaschine from "../../assets/pictograms/FM-Emoji_ohneRand50.png";

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
          <ClickablePicto src={pictoTiefzieh} />
          <ClickablePicto
            src={pictoPlotter}
            style={{ position: "absolute", top: "50%", left: 0 }}
          />
          <ClickablePicto
            src={pictoRobo}
            style={{ position: "absolute", bottom: "-19%", left: 0 }}
          />
        </div>
        <div style={{ position: "relative" }}>
          <ClickablePicto src={pictoScan} style={{ marginTop: "100%" }} />
          <ClickablePicto
            src={picto3DPrint}
            style={{ position: "absolute", bottom: "15%", left: 0 }}
          />
        </div>
        <div style={{ position: "relative" }}>
          <ClickablePicto src={pictoVR} style={{ marginTop: 20 }} />
          <ClickablePicto
            src={pictoLaser}
            style={{ position: "absolute", top: "50%", left: 0 }}
          />
          <ClickablePicto
            src={pictoStickmaschine}
            style={{ position: "absolute", bottom: 0, left: 0 }}
          />
        </div>
      </div>

      <WeiterButton navigateTo="/losgehts/vorerfahrung" />
    </>
  );
}

export default Screen;
