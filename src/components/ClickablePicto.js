import classNames from "classnames";

function ClickablePicto({ src, srcActive, title, isActive, style, onClick }) {
  return (
    <div
      className={classNames("ClickablePicto", {
        "ClickablePicto--active": isActive,
      })}
    >
      <img
        style={style}
        title={title}
        alt={title}
        onClick={onClick}
        src={isActive ? srcActive : src}
      />
      <span className="ClickablePicto__textlayer">{title}</span>
    </div>
  );
}

export default ClickablePicto;
