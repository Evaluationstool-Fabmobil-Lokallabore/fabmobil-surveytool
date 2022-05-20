import classNames from "classnames";

function ClickablePicto({ src, srcActive, title, isActive, style, onClick }) {
  return (
    <img
      style={style}
      title={title}
      alt={title}
      onClick={onClick}
      className={classNames("ClickablePicto", {
        "ClickablePicto--active": isActive,
      })}
      src={isActive ? srcActive : src}
    />
  );
}

export default ClickablePicto;
