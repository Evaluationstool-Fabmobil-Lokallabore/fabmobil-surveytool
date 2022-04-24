import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import Fabutton from "./Fabutton";

const WAIT_BEFORE_NAVIGATE = 500;

function FabuttonNext({ to, onClick = () => {}, children, className, style }) {
  const navigate = useNavigate();
  return (
    <Fabutton
      className={classNames("FabuttonNext", className)}
      onClick={() => {
        onClick();
        setTimeout(() => navigate(to), WAIT_BEFORE_NAVIGATE);
      }}
    >
      {children || "..."}
    </Fabutton>
  );
}

export default FabuttonNext;
