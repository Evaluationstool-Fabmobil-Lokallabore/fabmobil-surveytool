import { useNavigate } from "react-router-dom";
import DoubleColumnContainer from "../../components/DoubleColumnContainer";
import Fabutton from "../../components/Fabutton";
import RobiGif from "../../components/RobiGif";
import robiTouch from "../../assets/robi-gifs/Robi_touch-min.gif";

function Screen() {
  const navigate = useNavigate();
  const nextRoute = "/erwartungen";
  return (
    <>
      <div>
        <p>Konntest du schon Mal im Fabmobil rumexperimentieren?</p>
      </div>
      <div style={{ marginTop: 200 }}>
        <DoubleColumnContainer>
          <Fabutton onClick={() => navigate(nextRoute)}>noch nie</Fabutton>
          <Fabutton onClick={() => navigate(nextRoute)}>erst einmal</Fabutton>
          <Fabutton onClick={() => navigate(nextRoute)}>zweimal</Fabutton>
          <Fabutton onClick={() => navigate(nextRoute)}>dreimal</Fabutton>
        </DoubleColumnContainer>
        <Fabutton onClick={() => navigate(nextRoute)}>
          Ich gehöre fast zur Crew
        </Fabutton>
        <RobiGif
          src={robiTouch}
          style={{
            width: 405,
            right: -130,
            top: -20,
            transform: "rotate(194deg)",
          }}
        />
      </div>
    </>
  );
}

export default Screen;
