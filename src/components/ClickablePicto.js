import classNames from "classnames";

function ClickablePicto({ src, srcActive, title, isActive, style, onClick }) {
  return (
    <div
      className={classNames("ClickablePicto", {
        "ClickablePicto--active": isActive,
      })}
      onClick={onClick}
    >
      <img
        className="ClickablePicto__image"
        style={style}
        title={title}
        alt={title}
        src={isActive ? srcActive : src}
      />
      <span className="ClickablePicto__textlayer">{title}</span>
    </div>
  );
}

export default ClickablePicto;
