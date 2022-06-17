import { useRef, useState, useEffect } from "react";
import FabTextArea from "../../components/FabTextArea";
import WeiterButton from "../../components/WeiterButton";
import RobiGif from "../../components/RobiGif";
import robiLongarmtouch from "../../assets/robi-gifs/Robi_longarmtouch-min.gif";

function Screen({ data, onSubmit }) {
  const containerRef = useRef(null);
  const [foobar, setFoobar] = useState(0);
  useEffect(() => {
    const textBox = containerRef.current.firstElementChild;
    setFoobar(textBox.offsetTop + textBox.offsetHeight);
    const resizeListener = () => {
      setFoobar(containerRef.current.offsetHeight);
    };
    window.addEventListener("resize", resizeListener);
    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, [data]);
  return (
    <>
      <div>
        <p>Welche Erwartungen hast du an deine Zeit bei uns im Fabmobil?</p>
      </div>
      <div className="flex-wrapper" ref={containerRef}>
        <FabTextArea value={data} onChange={onSubmit} />
      </div>
      <WeiterButton navigateTo="/losgehts/interesse" />
      <RobiGif
        src={robiLongarmtouch}
        style={{ width: 491, left: -123, top: foobar - 40 }}
      />
    </>
  );
}

export default Screen;
