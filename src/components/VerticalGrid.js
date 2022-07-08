import { useRef, useState, useEffect } from "react";
import classNames from "classnames";

function VerticalGrid({ children, style }) {
  const containerRef = useRef(null);
  const [hasOverflow, setHasOverflow] = useState(false);
  console.log(hasOverflow);

  function checkOverflow() {
    const el = containerRef.current;
    setHasOverflow(el.scrollHeight > el.clientHeight);
  }

  useEffect(() => {
    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => {
      window.removeEventListener("resize", checkOverflow);
    };
  }, []);

  return (
    <div className="vertical-grid__outerouter">
      <div
        className={classNames("vertical-grid__outer", {
          "vertical-grid__outer--overflowing": hasOverflow,
        })}
        style={style}
      >
        <div className="vertical-grid" ref={containerRef}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default VerticalGrid;
