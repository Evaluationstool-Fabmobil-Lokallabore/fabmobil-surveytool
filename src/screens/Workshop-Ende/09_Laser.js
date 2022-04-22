import { useNavigate } from "react-router-dom";
import Fabutton from "../../components/Fabutton";

function Screen() {
  const navigate = useNavigate();
  const nextRoute = "/wiewars/3D-Modelling";
  return (
    <>
      <div>
        <p>Lasercutter....dein Ding?</p>
      </div>
      <Fabutton onClick={() => navigate(nextRoute)}>
        Absolutes Lieblings-Tool
      </Fabutton>
      <Fabutton onClick={() => navigate(nextRoute)}>
        Kann man schon machen
      </Fabutton>
      <Fabutton onClick={() => navigate(nextRoute)}>
        Find ich nicht so spannend
      </Fabutton>
      <Fabutton onClick={() => navigate(nextRoute)}>Nicht benutzt</Fabutton>
    </>
  );
}

export default Screen;
