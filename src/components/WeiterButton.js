import Fabutton from "./Fabutton";

function WeiterButton({ children, style, text }) {
  return (
    <Fabutton className="WeiterButton" style={style}>
      {text || "weiter"}
    </Fabutton>
  );
}

export default WeiterButton;
