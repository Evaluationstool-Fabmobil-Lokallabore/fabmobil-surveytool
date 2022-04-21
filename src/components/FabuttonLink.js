import { Link } from "react-router-dom";

function FabuttonLink({ to, children, className, style }) {
  return (
    <Link to={to}>
      <div className={`Fabutton ${className || ""}`} style={style}>
        {children || "..."}
      </div>{" "}
    </Link>
  );
}

export default FabuttonLink;
