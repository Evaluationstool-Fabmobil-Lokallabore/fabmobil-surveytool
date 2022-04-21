import Fabutton from "../../components/Fabutton";
import DoubleColumnContainer from "../../components/DoubleColumnContainer";

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
    </>
  );
}

export default Screen;
