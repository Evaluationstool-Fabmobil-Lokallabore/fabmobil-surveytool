import FabSlider from "../../components/FabSlider";
import DoubleColumnContainer from "../../components/DoubleColumnContainer";
import Fabutton from "../../components/Fabutton";
import FabuttonNext from "../../components/FabuttonNext";
import robiThumbsUp from "../../assets/pictograms/robi_thumbsup.png";
import robiThumbsDown from "../../assets/pictograms/robi_thumbsdown.png";
import BackButton from "../../components/BackButton";

function Screen({ onSubmit, data }) {
  function hasUserAnswered() {
    if (typeof data === "number" || typeof data === "string") {
      return true;
    }
    return false;
  }
  const nextRoute = "/wiewars/laser";
  return (
    <>
      <div className="question-and-back" style={{ marginBottom: "auto" }}>
        <BackButton />
        <p>Was hälst du von VR?</p>
      </div>
      <FabSlider
        imgTop={robiThumbsUp}
        imgBottom={robiThumbsDown}
        onChange={onSubmit}
        value={isNaN(data) ? 0 : data}
      />
      <DoubleColumnContainer>
        <Fabutton
          isActive={data === "nicht benutzt"}
          onClick={() => {
            onSubmit("nicht benutzt");
          }}
        >
          nicht benutzt
        </Fabutton>
        <FabuttonNext
          enabled={hasUserAnswered()}
          to={nextRoute}
          style={{ flexBasis: "50%" }}
        >
          weiter
        </FabuttonNext>
      </DoubleColumnContainer>
    </>
  );
}

export default Screen;
