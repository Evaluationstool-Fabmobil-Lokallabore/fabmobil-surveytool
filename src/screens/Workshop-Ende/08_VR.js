import FabSlider from "../../components/FabSlider";
import DoubleColumnContainer from "../../components/DoubleColumnContainer";
import Fabutton from "../../components/Fabutton";
import FabuttonNext from "../../components/FabuttonNext";
import robiThumbsUp from "../../assets/pictograms/robi_thumbsup.png";
import robiThumbsDown from "../../assets/pictograms/robi_thumbsdown.png";

function Screen({ onSubmit, data }) {
  const nextRoute = "/wiewars/laser";
  return (
    <>
      <div style={{ marginBottom: "auto" }}>
        <p>Was hälst du von VR?</p>
      </div>
      <FabSlider
        imgTop={robiThumbsUp}
        imgBottom={robiThumbsDown}
        onChange={onSubmit}
        value={isNaN(data) ? 0 : data}
      />
      <DoubleColumnContainer style={{ marginBottom: 126 }}>
        <Fabutton
          isActive={data === "nicht benutzt"}
          onClick={() => {
            onSubmit("nicht benutzt");
          }}
        >
          nicht benutzt
        </Fabutton>
        <FabuttonNext to={nextRoute} style={{ flexBasis: "50%" }}>
          weiter
        </FabuttonNext>
      </DoubleColumnContainer>
    </>
  );
}

export default Screen;
