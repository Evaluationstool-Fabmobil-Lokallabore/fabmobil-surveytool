function Fabutton({ children, onClick, className, style }) {
  return (
    <div
      onClick={onClick}
      className={`Fabutton ${className || ""}`}
      style={style}
    >
      {children || "..."}
    </div>
  );
}

export default Fabutton;
