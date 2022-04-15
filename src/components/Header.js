import Logo from "../assets/FABMOBIL_White.svg";

function Header() {
  return (
    <div className="Header">
      <img src={Logo} className="Header__Logo" alt="logo" />
    </div>
  );
}

export default Header;
