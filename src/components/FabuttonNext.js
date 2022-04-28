import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import Fabutton from "./Fabutton";

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
