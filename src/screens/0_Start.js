import FabuttonLink from "../components/FabuttonLink";

function Screen() {
  return (
    <>
      <FabuttonLink to="/anmeldung" style={{ marginBottom: 26 }}>
        Workshop Start
      </FabuttonLink>
      <FabuttonLink to="/" style={{ marginBottom: 26 }}>
        Workshop Ende
      </FabuttonLink>{" "}
    </>
  );
}

export default Screen;
