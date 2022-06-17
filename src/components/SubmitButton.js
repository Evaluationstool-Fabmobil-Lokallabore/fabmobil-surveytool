import Fabutton from "./Fabutton";
import classNames from "classnames";

function SubmitButton({ enabled = true, onClick }) {
  return (
    <Fabutton
      className={classNames("WeiterButton", {
        "WeiterButton--disabled": !enabled,
      })}
      onClick={onClick}
    >
      Abschicken!
    </Fabutton>
  );
}

export default SubmitButton;
