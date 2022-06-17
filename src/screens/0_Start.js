import FabuttonNext from "../components/FabuttonNext";

function Screen() {
  return (
    <>
      <div className="flex-vertical-center">
        <div>
          <FabuttonNext
            to="/losgehts/anmeldung"
            style={{
              marginBottom: 26,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Workshop Start
          </FabuttonNext>
          <FabuttonNext
            to="/wiewars/nickname"
            wait={0}
            style={{ margin: "0 auto" }}
          >
            Workshop Ende
          </FabuttonNext>
        </div>
      </div>
    </>
  );
}

export default Screen;
