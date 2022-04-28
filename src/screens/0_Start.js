import FabuttonNext from "../components/FabuttonNext";

function Screen() {
  return (
    <>
      <div className="flex-vertical-center">
        <FabuttonNext to="/losgehts/anmeldung" style={{ marginBottom: 26 }}>
          Workshop Start
        </FabuttonNext>
        <FabuttonNext to="/wiewars/nickname" wait={0}>
          Workshop Ende
        </FabuttonNext>
      </div>
    </>
  );
}

export default Screen;
