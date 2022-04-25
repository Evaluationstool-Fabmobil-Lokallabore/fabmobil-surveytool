import Fabutton from "./Fabutton";

function SubmitButton({ onClick }) {
  return (
    <Fabutton className="WeiterButton" onClick={onClick}>
      Abschicken!
    </Fabutton>
  );
}

export default SubmitButton;
