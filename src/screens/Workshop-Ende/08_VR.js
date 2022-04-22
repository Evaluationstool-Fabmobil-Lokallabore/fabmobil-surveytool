import { useNavigate } from "react-router-dom";
import FabSlider from "../../components/FabSlider";
import DoubleColumnContainer from "../../components/DoubleColumnContainer";
import Fabutton from "../../components/Fabutton";
import FabuttonLink from "../../components/FabuttonLink";
import robiThumbsUp from "../../assets/pictograms/robi_thumbsup.png";
import robiThumbsDown from "../../assets/pictograms/robi_thumbsdown.png";

function Screen() {
  const navigate = useNavigate();
  const nextRoute = "/wiewars/laser";
  return (
    <>
      <div style={{ marginBottom: "auto" }}>
        <p>Was hälst du von VR?</p>
      </div>
      <FabSlider imgTop={robiThumbsUp} imgBottom={robiThumbsDown} />
      <DoubleColumnContainer style={{ marginBottom: 126 }}>
        <Fabutton
          onClick={() => navigate(nextRoute)}
          style={{ borderRight: 0 }}
        >
          nicht benutzt
        </Fabutton>
        <FabuttonLink to={nextRoute} style={{ flexBasis: "50%" }}>
          weiter
        </FabuttonLink>
      </DoubleColumnContainer>
    </>
  );
}

export default Screen;
