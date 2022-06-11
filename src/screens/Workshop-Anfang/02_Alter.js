import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import SingleChoiceTool from "../../components/SingleChoiceTool";
import DoubleColumnContainer from "../../components/DoubleColumnContainer";
import RobiGifSpecial from "../../components/RobiGifSpecial";
import robiLookaround from "../../assets/robi-gifs/Robi_lookaround-min.gif";

const ANSWER_OPTIONS = ["0-12", "13-16", "17-20", "21-24", "25-99", "99+"];
const nextRoute = "/losgehts/postleitzahl";

function Screen({ data, onSubmit }) {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const [foobar, setFoobar] = useState(0);
  useEffect(() => {
    setFoobar(containerRef.current.offsetHeight);
    const resizeListener = () => {
      setFoobar(containerRef.current.offsetHeight);
    };
    window.addEventListener("resize", resizeListener);
    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, []);

  return (
    <>
      <div>
        <p>Wie alt bist du denn?</p>
      </div>
      <div className="flex-wrapper" ref={containerRef}></div>
      <DoubleColumnContainer style={{}}>
        <SingleChoiceTool
          options={ANSWER_OPTIONS}
          answer={data}
          onSelect={(value) => {
            onSubmit(value);
            setTimeout(() => navigate(nextRoute), 500);
          }}
        />
      </DoubleColumnContainer>
      <RobiGifSpecial src={robiLookaround} style={{ height: foobar + 200 }} />
    </>
  );
}

export default Screen;
