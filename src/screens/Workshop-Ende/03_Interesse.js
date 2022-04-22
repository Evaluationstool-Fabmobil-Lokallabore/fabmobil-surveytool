import { useNavigate } from "react-router-dom";
import Fabutton from "../../components/Fabutton";

function Screen() {
  const navigate = useNavigate();
  const nextRoute = "/wiewars/technologie";
  return (
    <>
      <div>
        <p>
          Hat das Fabmobil dein Interesse für digitale Technologien geweckt?
        </p>
      </div>
      <Fabutton onClick={() => navigate(nextRoute)}>Ja voll</Fabutton>
      <Fabutton onClick={() => navigate(nextRoute)}>Nö</Fabutton>
      <Fabutton onClick={() => navigate(nextRoute)}>
        Hatte ich vorher schon
      </Fabutton>
    </>
  );
}

export default Screen;
