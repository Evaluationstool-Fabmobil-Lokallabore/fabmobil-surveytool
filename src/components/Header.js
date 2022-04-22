import { Link } from "react-router-dom";
import Logo from "../assets/FABMOBIL_White.svg";

function Header() {
  return (
    <div className="Header">
      <Link to="/" className="Header__link">
        <img src={Logo} className="Header__logo" alt="logo" />
      </Link>
    </div>
  );
}

export default Header;
