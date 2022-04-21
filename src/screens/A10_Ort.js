import Fabutton from "../components/Fabutton";
import DoubleColumnContainer from "../components/DoubleColumnContainer";

function Screen() {
  return (
    <>
      <div>
        <p>Wo bist du gerade?</p>
      </div>
      <Fabutton>Grundschule</Fabutton>
      <Fabutton>Förderschule</Fabutton>
      <Fabutton>Oberschule</Fabutton>
      <Fabutton>Gymnasium</Fabutton>
      <Fabutton>Berufsschule</Fabutton>
    </>
  );
}

export default Screen;
