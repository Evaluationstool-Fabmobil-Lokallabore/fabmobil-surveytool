import { Link } from "react-router-dom";
import Logo from "../assets/FABMOBIL_White.svg";

function Header({ onLogoClick = () => {} }) {
  return (
    <div className="Header">
      <div className="Header__inner">
        <Link
          to="/"
          className="Header__link"
          onClick={(e) => {
            window.confirm("Bist du sicher, dass du von vorn starten möchtest?")
              ? onLogoClick()
              : e.preventDefault();
          }}
        >
          <img src={Logo} className="Header__logo" alt="logo" />
        </Link>
      </div>
    </div>
  );
}

export default Header;
