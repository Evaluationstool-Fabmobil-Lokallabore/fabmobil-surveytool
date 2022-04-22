import WeiterButton from "../../components/WeiterButton";

function Screen() {
  return (
    <>
      <div>
        <p>Wie war die Atmosphäre im Fabmobil?</p>
      </div>

      <WeiterButton navigateTo="/angebot" />
    </>
  );
}

export default Screen;
