import FabTextInput from "../../components/FabTextInput";
import WeiterButton from "../../components/WeiterButton";
import RobiGifComposite from "../../components/RobiGifComposite";

function Screen({ onSubmit, data }) {
  return (
    <>
      <div>
        <p>Willkommen zurück!</p>
        <p>Verrätst du mir deinen Nicknamen?</p>
      </div>

      <FabTextInput
        value={data}
        onChange={onSubmit}
        style={{ marginTop: "auto", marginBottom: "auto" }}
      />

      <WeiterButton navigateTo="/wiewars/spass" />
      <RobiGifComposite style={{ bottom: 0 }} />
    </>
  );
}

export default Screen;
