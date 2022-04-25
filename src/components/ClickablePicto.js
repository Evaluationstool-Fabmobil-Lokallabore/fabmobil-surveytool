import classNames from "classnames";

function ClickablePicto({ src, title, isActive, style, onClick }) {
  return (
    <img
      style={style}
      alt={title}
      onClick={onClick}
      className={classNames("ClickablePicto", {
        "ClickablePicto--active": isActive,
      })}
      src={src}
    />
  );
}

export default ClickablePicto;
