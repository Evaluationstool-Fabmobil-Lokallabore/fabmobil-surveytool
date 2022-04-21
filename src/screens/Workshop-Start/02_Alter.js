import { useNavigate } from "react-router-dom";
import Fabutton from "../../components/Fabutton";
import DoubleColumnContainer from "../../components/DoubleColumnContainer";
import RobiGif from "../../components/RobiGif";
import robiLookaround from "../../assets/robi-gifs/Robi_lookaround-min.gif";

function Screen() {
  const navigate = useNavigate();
  const nextRoute = "/postleitzahl";
  return (
    <>
      <div style={{ marginBottom: "auto" }}>
        <p>Wie alt bist du denn?</p>
      </div>
      <DoubleColumnContainer style={{ marginBottom: 126 }}>
        <Fabutton onClick={() => navigate(nextRoute)}>0-12</Fabutton>
        <Fabutton onClick={() => navigate(nextRoute)}>13-16</Fabutton>
        <Fabutton onClick={() => navigate(nextRoute)}>17-20</Fabutton>
        <Fabutton onClick={() => navigate(nextRoute)}>21-24</Fabutton>
        <Fabutton onClick={() => navigate(nextRoute)}>25-99</Fabutton>
        <Fabutton onClick={() => navigate(nextRoute)}>99+</Fabutton>
      </DoubleColumnContainer>
      <RobiGif src={robiLookaround} style={{ top: -10 }} />
    </>
  );
}

export default Screen;
