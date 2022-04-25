import FabSlider from "../../components/FabSlider";
import WeiterButton from "../../components/WeiterButton";
import happyFabmobil from "../../assets/pictograms/fabmobil_happy.png";
import sadFabmobil from "../../assets/pictograms/fabmobil_sad.png";

function Screen({ onSubmit, data }) {
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
      <WeiterButton navigateTo="/wiewars/angebot" />
    </>
  );
}

export default Screen;
