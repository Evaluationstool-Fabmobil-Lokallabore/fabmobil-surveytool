import FabTextInput from "../../components/FabTextInput";
import WeiterButton from "../../components/WeiterButton";
import RobiGifComposite from "../../components/RobiGifComposite";

function Screen({ onSubmit, data }) {
  return (
    <>
      <div style={{ marginBottom: 152 }}>
        <p>Willkommen zurück!</p>
        <p>Verrätst du mir deinen Nicknamen?</p>
      </div>

      <FabTextInput value={data} onChange={onSubmit} />

      <WeiterButton navigateTo="/wiewars/spass" />
      <RobiGifComposite style={{ bottom: 0, left: -48 }} />
    </>
  );
}

export default Screen;
