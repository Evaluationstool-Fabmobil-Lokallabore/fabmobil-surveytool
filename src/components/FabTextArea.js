import TextareaAutosize from "react-textarea-autosize";

function FabTextArea({ children, style, ...otherProps }) {
  return (
    <div className="FabTextArea" style={style}>
      <TextareaAutosize
        className="FabTextArea__inner"
        style={{ height: "65px", padding: "10px" }}
        {...otherProps}
      />
    </div>
  );
}

export default FabTextArea;
