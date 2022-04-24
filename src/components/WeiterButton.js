import FabuttonNext from "./FabuttonNext";

function WeiterButton({ navigateTo, text, style }) {
  return (
    <FabuttonNext to={navigateTo || "#"} className="WeiterButton" style={style}>
      {text || "weiter"}
    </FabuttonNext>
  );
}

export default WeiterButton;
