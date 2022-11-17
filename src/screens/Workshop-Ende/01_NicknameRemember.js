import { useState, useEffect, useRef } from "react";
import FabTextInput from "../../components/FabTextInput";
import WeiterButton from "../../components/WeiterButton";
import RobiGifComposite from "../../components/RobiGifComposite";
import { useNavigate } from "react-router-dom";


function Screen({ onSubmit, data, firebaseClient, onLogin }) {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const [foobar, setFoobar] = useState(0);
  const calcFoobar = () => {
    return containerRef.current.offsetHeight / 2 + 100;
  };
  function hasUserAnswered() {
    if (!data) return false;
    return !!data.nickname && !!data.day && !!data.month && !!data.year;
  }
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
        <p>Verrätst du mir deinen Nicknamen und Geburtstag?</p>
      </div>

      <div
        className="flex-wrapper"
        style={{ position: "relative" }}
        ref={containerRef}
      >
        <FabTextInput
          value={(data && data.nickname) || ""}
          onChange={(val) => onSubmit({ ...data, nickname: val })}
        />
      </div>
      <FabTextInput pattern="[0-9]{2}"
        maxLength={2} placeholder="Tag" value={(data && data.day) || ""} onChange={(val) => onSubmit({ ...data, day: val })} />
      <FabTextInput pattern="[0-9]{2}"
        maxLength={2} placeholder="Monat" value={(data && data.month) || ""} onChange={(val) => onSubmit({ ...data, month: val })} />
      <FabTextInput pattern="[0-9]{4}"
        maxLength={4} placeholder="Jahr" value={(data && data.year) || ""} onChange={(val) => onSubmit({ ...data, year: val })} />
      <WeiterButton enabled={hasUserAnswered()} onClick={() => {
        const userID = firebaseClient.createUserID(data.nickname, { day: data.day, month: data.month, year: data.year });
        firebaseClient.userDoesExist(userID).then((doesExist) => {
          if (!doesExist) {
            alert("Dieser Nickname mit diesem Geburtsdatum existiert nicht!");
            return;
          }
          onLogin(data.nickname, { day: data.day, month: data.month, year: data.year });
          navigate("/wiewars/spass")
        });
      }} />
      <RobiGifComposite
        style={{ bottom: 0, left: 0, height: foobar, marginBottom: 0 }}
      />
    </>
  );
}

export default Screen;
