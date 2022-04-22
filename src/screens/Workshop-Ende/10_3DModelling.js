import DoubleColumnContainer from "../../components/DoubleColumnContainer";
import Fabutton from "../../components/Fabutton";
import FabuttonLink from "../../components/FabuttonLink";

function Screen() {
  return (
    <>
      <div style={{ marginBottom: "auto" }}>
        <p>3D-Modelling rockt?</p>
      </div>
      <DoubleColumnContainer style={{ marginBottom: 126 }}>
        <Fabutton>nicht benutzt</Fabutton>
        <FabuttonLink to="/erwartungen2">weiter</FabuttonLink>
      </DoubleColumnContainer>
    </>
  );
}

export default Screen;
