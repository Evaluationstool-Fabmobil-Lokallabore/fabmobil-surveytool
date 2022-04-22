import { useNavigate } from "react-router-dom";
import Fabutton from "../../components/Fabutton";

function Screen() {
  const navigate = useNavigate();
  const nextRoute = "/wiewars/anything-else";
  return (
    <>
      <div>
        <p>Hättest du Lust dich in einem regelmäßigen Angebot zu engagieren?</p>
      </div>
      <Fabutton onClick={() => navigate(nextRoute)}>Super gern!</Fabutton>
      <Fabutton onClick={() => navigate(nextRoute)}>Nope - keine Zeit</Fabutton>
      <Fabutton onClick={() => navigate(nextRoute)}>
        Nee... kein Interesse
      </Fabutton>
      <Fabutton onClick={() => navigate(nextRoute)}>
        Könnt ich mir vorstellen...
      </Fabutton>
    </>
  );
}

export default Screen;
