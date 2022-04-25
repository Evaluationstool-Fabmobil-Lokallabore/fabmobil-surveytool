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
        <MultiplePictoChoice data={data} onChange={onSubmit} />
      </div>

      <WeiterButton navigateTo="/losgehts/vorerfahrung" />
    </>
  );
}

export default Screen;
