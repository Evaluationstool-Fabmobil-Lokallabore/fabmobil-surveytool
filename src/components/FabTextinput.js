function FabTextinput({ children, style, ...otherProps }) {
  return (
    <div className="FabTextInput" style={style}>
      <input
        className="FabTextInput__input"
        type="text"
        {...otherProps}
      ></input>
    </div>
  );
}

export default FabTextinput;
