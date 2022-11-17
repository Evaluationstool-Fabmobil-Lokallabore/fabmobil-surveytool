import React, { useEffect } from "react";
import WeiterButton from "../../components/WeiterButton";
import RobiGifFlex from "../../components/RobiGifFlex";
import { useNavigate } from "react-router-dom";

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
        <p>
          So. Dann kannst du dich endlich der ganzen abgefahrenen Technik im
          Fabmobil widmen.
        </p>
        <p>Viel Spass und bis später.</p>
      </div>
      <RobiGifFlex style={{ marginTop: -100, maxHeight: 500 }} />
      <WeiterButton text="fertig" navigateTo={"/"} />
    </>
  );
}

export default Screen;
