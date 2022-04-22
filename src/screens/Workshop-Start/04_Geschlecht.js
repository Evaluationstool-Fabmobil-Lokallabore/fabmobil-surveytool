import DoubleColumnContainer from "../../components/DoubleColumnContainer";
import Fabutton from "../../components/Fabutton";
import FabTextInput from "../../components/FabTextInput";
import WeiterButton from "../../components/WeiterButton";
import RobiGif from "../../components/RobiGif";
import robiTastatur from "../../assets/robi-gifs/Robi_tastatur-min.gif";

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
        <FabTextInput style={{ flex: 1 }} />
      </DoubleColumnContainer>
      <WeiterButton navigateTo="/losgehts/besuch" />
      <RobiGif src={robiTastatur} style={{ width: 180, right: 0, top: 145 }} />
    </>
  );
}

export default Screen;
