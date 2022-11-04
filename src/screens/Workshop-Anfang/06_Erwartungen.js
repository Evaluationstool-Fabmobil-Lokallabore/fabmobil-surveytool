import { useRef, useState, useEffect } from "react";
import FabTextArea from "../../components/FabTextArea";
import WeiterButton from "../../components/WeiterButton";
import RobiGif from "../../components/RobiGif";
import robiLongarmtouch from "../../assets/robi-gifs/Robi_longarmtouch-min.gif";
import BackButton from "../../components/BackButton";

const widthRobi = 491;

function Screen({ data, onSubmit }) {
  const containerRef = useRef(null);
  const [textboxY, setTextboxY] = useState(0);
  const [textboxX, setTextboxX] = useState(0);

  function updateTextboxX() {
    const textBox = containerRef.current.firstElementChild;
    const target = textBox.getBoundingClientRect().x + textBox.offsetWidth / 2;
    setTextboxX(target - widthRobi + 80);
  }

  function updateTextboxY() {
    const textBox = containerRef.current.firstElementChild;
    setTextboxY(textBox.offsetTop + textBox.offsetHeight);
  }

  useEffect(() => {
    updateTextboxX();
    updateTextboxY();

    const resizeListener = () => {
      updateTextboxX();
      updateTextboxY();
    };
    window.addEventListener("resize", resizeListener);
    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, [data]);
  return (
    <>
      <div className="question-and-back">
        <BackButton />
        <p>Welche Erwartungen hast du an deine Zeit bei uns im Fabmobil?</p>
      </div>
      <div className="flex-wrapper" ref={containerRef}>
        <FabTextArea value={data} onChange={onSubmit} />
      </div>
      <WeiterButton navigateTo="/losgehts/interesse" />
      <RobiGif
        src={robiLongarmtouch}
        style={{ width: widthRobi, left: textboxX, top: textboxY - 40 }}
      />
    </>
  );
}

export default Screen;
