import Fabutton from "../../components/Fabutton";
import DoubleColumnContainer from "../../components/DoubleColumnContainer";
import RobiGif from "../../components/RobiGif";
import robiSprung from "../../assets/robi-gifs/Robi_sprung-min.gif";

function Screen() {
  return (
    <>
      <div>
        <p>Sweet. Du hast bereits die Hälfte meiner Fragen beantwortet. </p>
        <p>Wie viele Tage darfst du im Fabmobil verbringen?</p>
      </div>
      <DoubleColumnContainer style={{ marginBottom: 126 }}>
        <Fabutton>1</Fabutton>
        <Fabutton>2</Fabutton>
        <Fabutton>3</Fabutton>
        <Fabutton>4</Fabutton>
        <Fabutton>5</Fabutton>
      </DoubleColumnContainer>
      <RobiGif src={robiSprung} style={{ left: -100, bottom: 0 }} />
    </>
  );
}

export default Screen;
