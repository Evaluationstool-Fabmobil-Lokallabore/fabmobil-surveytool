import FabTextInput from "../../components/FabTextInput";
import WeiterButton from "../../components/WeiterButton";
import RobiGifComposite from "../../components/RobiGifFlexComposite";

function Screen({ onSubmit, data }) {
  return (
    <>
      <div>
        <p>Willkommen zurück!</p>
        <p>Verrätst du mir deinen Nicknamen?</p>
      </div>

      <FabTextInput value={data} onChange={onSubmit} />
      <RobiGifComposite style={{ marginTop: -50 }} />
      <WeiterButton navigateTo="/wiewars/spass" />
    </>
  );
}

export default Screen;
