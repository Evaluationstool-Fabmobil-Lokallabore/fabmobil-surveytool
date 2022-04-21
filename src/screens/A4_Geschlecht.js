import DoubleColumnContainer from "../components/DoubleColumnContainer";
import Fabutton from "../components/Fabutton";
import FabTextinput from "../components/FabTextinput";
import WeiterButton from "../components/WeiterButton";

function Screen() {
  return (
    <>
      <div style={{ marginBottom: "auto" }}>
        <p>Was hast du für ein Geschlecht?</p>
      </div>
      <DoubleColumnContainer style={{ marginBottom: 126 }}>
        <Fabutton>divers</Fabutton>
        <Fabutton>weiblich</Fabutton>
        <Fabutton>männlich</Fabutton>
        <Fabutton>keine Angabe</Fabutton>
        <FabTextinput style={{ margin: "auto" }} />
      </DoubleColumnContainer>
      <WeiterButton />
    </>
  );
}

export default Screen;
