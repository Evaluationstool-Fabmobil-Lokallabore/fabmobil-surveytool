import { Link } from "react-router-dom";

function FabuttonLink({ to, children, className, style }) {
  return (
    <Link to={to} style={style}>
      <div className={`Fabutton ${className || ""}`}>{children || "..."}</div>{" "}
    </Link>
  );
}

export default FabuttonLink;