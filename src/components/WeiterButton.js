import FabuttonNext from "./FabuttonNext";

function WeiterButton({ enabled = true, navigateTo, text, style }) {
  return (
    <FabuttonNext
      enabled={enabled}
      to={navigateTo || "#"}
      className="WeiterButton"
      style={style}
    >
      {text || "weiter"}
    </FabuttonNext>
  );
}

export default WeiterButton;
