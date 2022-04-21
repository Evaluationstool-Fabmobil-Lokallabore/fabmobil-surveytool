import Fabutton from "../components/Fabutton";
import WeiterButton from "../components/WeiterButton";

function Screen() {
  return (
    <>
      <div>
        <p>Wie hast du vom Fabmobil gehört?</p>
      </div>
      <Fabutton>Interesse digitale Technik</Fabutton>
      <Fabutton>Hauptsache was los</Fabutton>
      <Fabutton>Schulische Verpflichtung</Fabutton>
      <Fabutton>Wurde mitgeschleppt</Fabutton>

      <WeiterButton text="fertig" />
    </>
  );
}

export default Screen;
