import FabSlider from "../../components/FabSlider";
import DoubleColumnContainer from "../../components/DoubleColumnContainer";
import Fabutton from "../../components/Fabutton";
import FabuttonLink from "../../components/FabuttonLink";
import robiThumbsUp from "../../assets/pictograms/robi_thumbsup.png";
import robiThumbsDown from "../../assets/pictograms/robi_thumbsdown.png";

function Screen() {
  return (
    <>
      <div style={{ marginBottom: "auto" }}>
        <p>Was hälst du von VR?</p>
      </div>
      <FabSlider imgTop={robiThumbsUp} imgBottom={robiThumbsDown} />
      <DoubleColumnContainer style={{ marginBottom: 126 }}>
        <Fabutton>nicht benutzt</Fabutton>
        <FabuttonLink to="/wiewars/laser">weiter</FabuttonLink>
      </DoubleColumnContainer>
    </>
  );
}

export default Screen;
