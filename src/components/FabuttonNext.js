import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import Fabutton from "./Fabutton";

const WAIT_BEFORE_NAVIGATE = 500;

function FabuttonNext({ to, onClick = () => {}, children, className }) {
  const navigate = useNavigate();
  return (
    <Fabutton
      className={classNames("FabuttonNext", className)}
      onClick={() => {
        onClick();
        navigate(to);
      }}
    >
      {children || "..."}
    </Fabutton>
  );
}

export default FabuttonNext;
