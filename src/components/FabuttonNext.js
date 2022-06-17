import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import Fabutton from "./Fabutton";

function FabuttonNext({
  enabled = true,
  to,
  onClick = () => {},
  children,
  className,
  style,
}) {
  const navigate = useNavigate();
  return (
    <Fabutton
      enabled={enabled}
      className={classNames("FabuttonNext", className, {
        "FabuttonNext--disabled": !enabled,
      })}
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
