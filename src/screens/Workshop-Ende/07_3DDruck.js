import { useNavigate } from "react-router-dom";
import Fabutton from "../../components/Fabutton";

function Screen() {
  const navigate = useNavigate();
  const nextRoute = "/vr";
  return (
    <>
      <div>
        <p>Wie spannend findest du 3D-Druck?</p>
      </div>
      <Fabutton onClick={() => navigate(nextRoute)}>Mega! ich liebs</Fabutton>
      <Fabutton onClick={() => navigate(nextRoute)}>So mittel</Fabutton>
      <Fabutton onClick={() => navigate(nextRoute)}>
        Fand ich nicht so cool...
      </Fabutton>
      <Fabutton onClick={() => navigate(nextRoute)}>Nicht benutzt</Fabutton>
    </>
  );
}

export default Screen;
