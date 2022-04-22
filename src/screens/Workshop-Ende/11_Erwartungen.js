import WeiterButton from "../../components/WeiterButton";

function Screen() {
  return (
    <>
      <div>
        <p>Wurden deine Erwartungen im Fabmobil erfüllt?</p>
      </div>

      <WeiterButton navigateTo="/next-time" />
    </>
  );
}
export default Screen;
