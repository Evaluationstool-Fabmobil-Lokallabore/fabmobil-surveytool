import DoubleColumnContainer from "../../components/DoubleColumnContainer";
import Fabutton from "../../components/Fabutton";
import FabuttonLink from "../../components/FabuttonLink";

function Screen() {
  return (
    <>
      <div style={{ marginBottom: "auto" }}>
        <p>Was hälst du von VR?</p>
      </div>
      <DoubleColumnContainer style={{ marginBottom: 126 }}>
        <Fabutton>nicht benutzt</Fabutton>
        <FabuttonLink to="/laser">weiter</FabuttonLink>
      </DoubleColumnContainer>
    </>
  );
}

export default Screen;
