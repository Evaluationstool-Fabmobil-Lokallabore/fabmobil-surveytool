import Fabutton from "../../components/Fabutton";
import DoubleColumnContainer from "../../components/DoubleColumnContainer";
import RobiGif from "../../components/RobiGif";
import robiLookaround from "../../assets/robi-gifs/Robi_lookaround-min.gif";

function Screen() {
  return (
    <>
      <div style={{ marginBottom: "auto" }}>
        <p>Wie alt bist du denn?</p>
      </div>
      <DoubleColumnContainer style={{ marginBottom: 126 }}>
        <Fabutton>0-12</Fabutton>
        <Fabutton>13-16</Fabutton>
        <Fabutton>17-20</Fabutton>
        <Fabutton>21-24</Fabutton>
        <Fabutton>25-99</Fabutton>
        <Fabutton>99+</Fabutton>
      </DoubleColumnContainer>
      <RobiGif src={robiLookaround} style={{ top: -10 }} />
    </>
  );
}

export default Screen;
