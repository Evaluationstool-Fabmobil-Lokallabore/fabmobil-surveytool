import { useNavigate } from "react-router-dom";
import Fabutton from "../../components/Fabutton";

function Screen() {
  const navigate = useNavigate();
  const nextRoute = "/wiewars/engagieren";
  return (
    <>
      <div>
        <p>Hättest du gern ein regelmässiges Angebot wie das Fabmobil?</p>
      </div>
      <div className="vertical-grid">
        <Fabutton onClick={() => navigate(nextRoute)}>Ja klar!</Fabutton>
        <Fabutton onClick={() => navigate(nextRoute)}>
          Naja...gibts hier schon
        </Fabutton>
        <Fabutton onClick={() => navigate(nextRoute)}>Nee...lass mal</Fabutton>
      </div>
    </>
  );
}

export default Screen;
