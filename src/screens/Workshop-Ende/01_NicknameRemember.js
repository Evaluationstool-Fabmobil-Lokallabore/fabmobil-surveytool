import { useState, useEffect, useRef } from "react";
import FabTextInput from "../../components/FabTextInput";
import WeiterButton from "../../components/WeiterButton";
import RobiGifComposite from "../../components/RobiGifComposite";
import VerticalGrid from "../../components/VerticalGrid";
import { useNavigate } from "react-router-dom";

function Screen({ onSubmit, data, firebaseClient, onLogin, reportError }) {
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
        <p>Logge dich mit deinem Vornamen und Geburtsdatum (in Zahlen) ein!</p>
      </div>

      <div
        className="flex-wrapper"
        style={{ position: "relative" }}
        ref={containerRef}
      ></div>
      <VerticalGrid>
        <FabTextInput
          placeholder="Vorname"
          value={(data && data.nickname) || ""}
          onChange={(val) => onSubmit({ ...data, nickname: val })}
        />
        <FabTextInput
          pattern="[0-9]{2}"
          maxLength={2}
          placeholder="31"
          value={(data && data.day) || ""}
          onChange={(val) => onSubmit({ ...data, day: val })}
        />
        <FabTextInput
          pattern="[0-9]{2}"
          maxLength={2}
          placeholder="01"
          value={(data && data.month) || ""}
          onChange={(val) => onSubmit({ ...data, month: val })}
        />
        <FabTextInput
          pattern="[0-9]{4}"
          maxLength={4}
          placeholder="2001"
          value={(data && data.year) || ""}
          onChange={(val) => onSubmit({ ...data, year: val })}
        />
        <small>
          <ul style={{ listStyle: "none" }}>
            <li>Erstes Feld = Dein Vorname</li>
            <li>Zweites Feld = Tag (genau 2 Zahlen) von deinem Geburtstag</li>
            <li>Drittes Feld = Monat (genau 2 Zahlen) von deinem Geburtstag</li>
            <li>Viertes Feld = Jahr (genau 4 Zahlen) von deinem Geburtstag</li>
          </ul>
        </small>
      </VerticalGrid>
      <WeiterButton
        enabled={hasUserAnswered()}
        onClick={() => {
          const userID = firebaseClient.createUserID(data.nickname, {
            day: data.day,
            month: data.month,
            year: data.year,
          });
          firebaseClient.userDoesExist(userID).then((doesExist) => {
            if (!doesExist) {
              reportError("USER_EXISTS_NOT");
              return;
            }
            onLogin(data.nickname, {
              day: data.day,
              month: data.month,
              year: data.year,
            });
            navigate("/wiewars/spass");
          });
        }}
      />
      <RobiGifComposite
        style={{ bottom: 0, left: 0, height: foobar, marginBottom: 0 }}
      />
    </>
  );
}

export default Screen;
