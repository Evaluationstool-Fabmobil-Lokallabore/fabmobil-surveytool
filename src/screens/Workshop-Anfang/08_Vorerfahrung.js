import WeiterButton from "../../components/WeiterButton";
import ClickablePicto from "../../components/ClickablePicto";
import FABMOBIL_PROGRAMS from "../../constants/fabmobil_programs";

const ANSWER_OPTIONS = FABMOBIL_PROGRAMS;

function Screen() {
  return (
    <>
      <div>
        <p>Welche Technologien hast du denn vor dem Kurs schon ausprobiert? </p>
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
        </div>
      </div>

      <WeiterButton navigateTo="/losgehts/anzahl-tage" />
    </>
  );
}

export default Screen;
