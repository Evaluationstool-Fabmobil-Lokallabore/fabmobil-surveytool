import { useNavigate } from "react-router-dom";
import Fabutton from "../../components/Fabutton";
import RobiGif from "../../components/RobiGif";
import robiLongarmslide from "../../assets/robi-gifs/Robi_longarmslide-min.gif";

function Screen() {
  const navigate = useNavigate();
  const nextRoute = "/losgehts/werbung";
  return (
    <>
      <div>
        <p>Wo bist du gerade?</p>
      </div>
      <Fabutton onClick={() => navigate(nextRoute)}>Grundschule</Fabutton>
      <Fabutton onClick={() => navigate(nextRoute)}>Förderschule</Fabutton>
      <Fabutton onClick={() => navigate(nextRoute)}>Oberschule</Fabutton>
      <Fabutton onClick={() => navigate(nextRoute)}>Gymnasium</Fabutton>
      <Fabutton onClick={() => navigate(nextRoute)}>Berufsschule</Fabutton>
      <Fabutton onClick={() => navigate(nextRoute)}>
        Soziokultureller Ort
      </Fabutton>
      <Fabutton onClick={() => navigate(nextRoute)}>Festival</Fabutton>
      <Fabutton onClick={() => navigate(nextRoute)}>Konferenz</Fabutton>
      <Fabutton onClick={() => navigate(nextRoute)}>Aktionstage</Fabutton>
      <Fabutton onClick={() => navigate(nextRoute)}>Andere</Fabutton>

      <RobiGif
        src={robiLongarmslide}
        style={{ right: -300, top: -20, transform: "rotate(180deg)" }}
      />
    </>
  );
}

export default Screen;
