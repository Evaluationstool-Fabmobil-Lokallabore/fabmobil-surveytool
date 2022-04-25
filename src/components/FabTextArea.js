import TextareaAutosize from "react-textarea-autosize";

function FabTextArea({ value, onChange, style, ...otherProps }) {
  return (
    <div className="FabTextArea" style={style}>
      <TextareaAutosize
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="FabTextArea__inner"
        style={{ height: "65px", padding: "10px" }}
        {...otherProps}
      />
    </div>
  );
}

export default FabTextArea;
