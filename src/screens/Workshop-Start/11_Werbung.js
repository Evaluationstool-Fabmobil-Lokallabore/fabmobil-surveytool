import Fabutton from "../components/Fabutton";

function Screen() {
  return (
    <>
      <div>
        <p>Wie hast du vom Fabmobil gehört?</p>
      </div>
      <Fabutton>Freund*innen</Fabutton>
      <Fabutton>Verwandte</Fabutton>
      <Fabutton>Schule</Fabutton>
      <Fabutton>Sonstige</Fabutton>
      <Fabutton>Soziale Medien</Fabutton>
    </>
  );
}

export default Screen;
