import { useState, useEffect, useRef } from "react";
import FabTextInput from "../../components/FabTextInput";
import WeiterButton from "../../components/WeiterButton";
import RobiGifComposite from "../../components/RobiGifComposite";

function Screen({ onSubmit, data }) {
  const containerRef = useRef(null);
  const [foobar, setFoobar] = useState(0);
  const calcFoobar = () => {
    return containerRef.current.offsetHeight / 2 + 100;
  };
  const hasUserAnswered = () => {
    if (!data || data.length < 1) return false;
    return true;
  };
  useEffect(() => {
    setFoobar(calcFoobar());
    const resizeListener = () => {
      setFoobar(calcFoobar());
    };
    window.addEventListener("resize", resizeListener);
    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, []);
  return (
    <>
      <div>
        <p>Willkommen zurück!</p>
        <p>Verrätst du mir deinen Nicknamen?</p>
      </div>

      <div
        className="flex-wrapper"
        style={{ position: "relative" }}
        ref={containerRef}
      >
        <FabTextInput
          value={data}
          onChange={onSubmit}
          style={{ marginTop: -65 }}
        />
      </div>
      <WeiterButton enabled={hasUserAnswered()} navigateTo="/wiewars/spass" />
      <RobiGifComposite
        style={{ bottom: 0, left: 0, height: foobar, marginBottom: 0 }}
      />
    </>
  );
}

export default Screen;
