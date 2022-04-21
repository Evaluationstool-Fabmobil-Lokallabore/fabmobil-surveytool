function Fabutton({ children, className, style }) {
  return (
    <div className={`Fabutton ${className || ""}`} style={style}>
      {children || "..."}
    </div>
  );
}

export default Fabutton;
