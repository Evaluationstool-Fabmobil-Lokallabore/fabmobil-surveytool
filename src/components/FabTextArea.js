import { useEffect } from "react";
import TextareaAutosize from "react-textarea-autosize";

function FabTextArea({ value, onChange, style, ...otherProps }) {
  useEffect(() => {
    //on mount
    document.getElementsByClassName("Main")[0].classList.add("overflow-scroll");
    return () => {
      // Anything in here is fired on component unmount.
      document
        .getElementsByClassName("Main")[0]
        .classList.remove("overflow-scroll");
    };
  }, []);
  return (
    <div className="FabTextArea" style={style}>
      <TextareaAutosize
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
          document.getElementsByClassName("Main")[0].scrollTop =
            document.getElementsByClassName("Main")[0].scrollHeight;
        }}
        className="FabTextArea__inner"
        style={{ height: "65px", padding: "10px" }}
        {...otherProps}
      />
    </div>
  );
}

export default FabTextArea;
