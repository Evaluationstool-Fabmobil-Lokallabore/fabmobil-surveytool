import FabuttonLink from "../components/FabuttonLink";

function Screen() {
  return (
    <>
      <FabuttonLink to="/losgehts/anmeldung" style={{ marginBottom: 26 }}>
        Workshop Start
      </FabuttonLink>
      <FabuttonLink to="/wiewars/nickname" style={{ marginBottom: 26 }}>
        Workshop Ende
      </FabuttonLink>{" "}
    </>
  );
}

export default Screen;
