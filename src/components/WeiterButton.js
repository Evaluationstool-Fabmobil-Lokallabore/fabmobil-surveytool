import FabuttonLink from "./FabuttonLink";

function WeiterButton({ navigateTo, text, style }) {
  return (
    <FabuttonLink to={navigateTo || "#"} className="WeiterButton" style={style}>
      {text || "weiter"}
    </FabuttonLink>
  );
}

export default WeiterButton;
