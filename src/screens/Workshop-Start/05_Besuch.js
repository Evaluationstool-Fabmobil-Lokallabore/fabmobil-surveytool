import DoubleColumnContainer from "../../components/DoubleColumnContainer";
import Fabutton from "../../components/Fabutton";
import RobiGif from "../../components/RobiGif";
import robiTouch from "../../assets/robi-gifs/Robi_touch-min.gif";

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
        <RobiGif
          src={robiTouch}
          style={{
            width: 405,
            right: -130,
            top: -20,
            transform: "rotate(194deg)",
          }}
        />
      </div>
    </>
  );
}

export default Screen;
