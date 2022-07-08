import FabSlider from "../../components/FabSlider";
import WeiterButton from "../../components/WeiterButton";
import happyFabmobil from "../../assets/pictograms/FM-Emoji_ohneRand30.png";
import sadFabmobil from "../../assets/pictograms/FM-Emoji_ohneRand3.png";

function Screen({ onSubmit, data }) {
  function hasUserAnswered() {
    if (typeof data === "number") {
      return true;
    }
    return false;
  }
  return (
    <>
      <div>
        <p>Wie war die Atmosphäre im Fabmobil?</p>
      </div>
      <FabSlider
        imgTop={happyFabmobil}
        imgBottom={sadFabmobil}
        onChange={onSubmit}
        value={isNaN(data) ? 0 : data}
      />
      <WeiterButton navigateTo="/wiewars/angebot" enabled={hasUserAnswered()} />
    </>
  );
}

export default Screen;
