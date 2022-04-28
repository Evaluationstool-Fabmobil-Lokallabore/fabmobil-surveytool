import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import Fabutton from "./Fabutton";

const WAIT_BEFORE_NAVIGATE = 500;

function FabuttonNext({ to, onClick = () => {}, children, className, style }) {
  const navigate = useNavigate();
  return (
    <Fabutton
      className={classNames("FabuttonNext", className)}
      style={style}
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
