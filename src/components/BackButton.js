import { useNavigate } from "react-router-dom";
import { ReactComponent as BackSvg } from "../assets/back.svg";

function BackButton() {
  let navigation = useNavigate();

  function handleClick() {
    navigation(-1);
  }

  return (
    <button className="BackButton" type="button" onClick={handleClick}>
      <BackSvg />
    </button>
  );
}

export default BackButton;
