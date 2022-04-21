import DoubleColumnContainer from "../components/DoubleColumnContainer";
import Fabutton from "../components/Fabutton";
import FabTextinput from "../components/FabTextinput";
import WeiterButton from "../components/WeiterButton";

function Screen() {
  return (
    <>
      <div>
        <p>Konntest du schon Mal im Fabmobil rumexperimentieren?</p>
      </div>
      <div style={{ marginTop: 200 }}>
        <DoubleColumnContainer>
          <Fabutton>noch nie</Fabutton>
          <Fabutton>erst einmal</Fabutton>
          <Fabutton>zweimal</Fabutton>
          <Fabutton>dreimal</Fabutton>
        </DoubleColumnContainer>
        <Fabutton>Ich gehöre fast zur Crew</Fabutton>
      </div>
    </>
  );
}

export default Screen;
