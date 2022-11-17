import FabuttonNext from "./FabuttonNext";

function WeiterButton({ onClick, enabled = true, navigateTo, text, style }) {
  return (
    <FabuttonNext
      enabled={enabled}
      to={navigateTo || "#"}
      className="WeiterButton"
      style={style}
      onClick={onClick}
    >
      {text || "weiter"}
    </FabuttonNext>
  );
}

export default WeiterButton;
