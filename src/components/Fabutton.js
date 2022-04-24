import React from "react";
import classNames from "classnames";

function Fabutton({ isActive, className, onClick, style, children }) {
  return (
    <div
      onClick={onClick}
      className={classNames("Fabutton", className, {
        "Fabutton--active": isActive,
      })}
      style={style}
    >
      {children || "..."}
    </div>
  );
}

export default Fabutton;
