function FabTextinput({ children, style, value, onChange, ...otherProps }) {
  return (
    <div className="FabTextInput" style={style}>
      <input
        className="FabTextInput__input"
        type="text"
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
        }}
        {...otherProps}
      ></input>
    </div>
  );
}

export default FabTextinput;
