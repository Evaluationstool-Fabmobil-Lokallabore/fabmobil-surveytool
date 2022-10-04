import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import WeiterButton from "../../components/WeiterButton";
import RobiGifFlex from "../../components/RobiGifFlex";

function Screen() {
  let navigate = useNavigate();

  useEffect(() => {
    const listener = () => {
      navigate("/");
    };
    window.addEventListener("popstate", listener);

    return () => {
      window.setTimeout(() => {
        window.removeEventListener("popstate", listener);
      }, 100);
    };
  }, [navigate]);

  return (
    <>
      <div>
        <p>Danke dass du mir so viele Fragen beantwortet hast.</p>
        <p>Es war schön dich kennenzulernen.</p>
      </div>
      <RobiGifFlex style={{ marginTop: -130, maxHeight: 500 }} />
      <WeiterButton text="fertig" navigateTo={"/"} />
    </>
  );
}

export default Screen;
