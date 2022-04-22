import FabuttonLink from "../components/FabuttonLink";

function Screen() {
  return (
    <>
      <div className="flex-vertical-center">
        <FabuttonLink to="/losgehts/anmeldung" style={{ marginBottom: 26 }}>
          Workshop Start
        </FabuttonLink>
        <FabuttonLink to="/wiewars/nickname" style={{ marginBottom: 26 }}>
          Workshop Ende
        </FabuttonLink>
      </div>
    </>
  );
}

export default Screen;
