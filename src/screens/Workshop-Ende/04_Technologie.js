import WeiterButton from "../../components/WeiterButton";
import ClickablePicto from "../../components/ClickablePicto";
import FABMOBIL_TECHNOLOGIES from "../../constants/fabmobil_technologies";

const ANSWER_OPTIONS = FABMOBIL_TECHNOLOGIES;

function Screen() {
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
        <div>
          <ClickablePicto src={ANSWER_OPTIONS[0].picto} />
          <ClickablePicto src={ANSWER_OPTIONS[1].picto} />
          <ClickablePicto src={ANSWER_OPTIONS[2].picto} />
        </div>
        <div>
          <ClickablePicto src={ANSWER_OPTIONS[3].picto} />
          <ClickablePicto src={ANSWER_OPTIONS[4].picto} />
        </div>
        <div>
          <ClickablePicto src={ANSWER_OPTIONS[5].picto} />
          <ClickablePicto src={ANSWER_OPTIONS[6].picto} />
          <ClickablePicto src={ANSWER_OPTIONS[7].picto} />
        </div>
      </div>

      <WeiterButton navigateTo="/wiewars/programme" />
    </>
  );
}

export default Screen;
