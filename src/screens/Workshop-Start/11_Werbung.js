import { useNavigate } from "react-router-dom";
import Fabutton from "../../components/Fabutton";
import RobiGif from "../../components/RobiGif";
import robiLongarmslide from "../../assets/robi-gifs/Robi_longarmslide-min.gif";

function Screen() {
  const navigate = useNavigate();
  const nextRoute = "/losgehts/grund";
  return (
    <>
      <div>
        <p>Wie hast du vom Fabmobil gehört?</p>
      </div>
      <Fabutton onClick={() => navigate(nextRoute)}>Freund*innen</Fabutton>
      <Fabutton onClick={() => navigate(nextRoute)}>Verwandte</Fabutton>
      <Fabutton onClick={() => navigate(nextRoute)}>Schule</Fabutton>
      <Fabutton onClick={() => navigate(nextRoute)}>Sonstige</Fabutton>
      <Fabutton onClick={() => navigate(nextRoute)}>Soziale Medien</Fabutton>
      <Fabutton onClick={() => navigate(nextRoute)}>
        Soziokultureller Ort
      </Fabutton>
      <Fabutton onClick={() => navigate(nextRoute)}>Festival</Fabutton>
      <Fabutton onClick={() => navigate(nextRoute)}>Konkurrenz</Fabutton>
      <RobiGif src={robiLongarmslide} style={{ left: -300, top: 300 }} />
    </>
  );
}

export default Screen;
