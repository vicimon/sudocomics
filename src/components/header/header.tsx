import FeatherIcon from "feather-icons-react";
import "./header.css";
import logo from "../../images/logo.png";

export default function Header() {
  return (
    <div className="header">
      <div>
        <img id="logo" src={logo} alt="" />
      </div>
      <div>
        <input type="text" placeholder="Pesquisar" />
      </div>
      <div className="botoes">
        <div className="icon">
          <FeatherIcon icon="box" />
        </div>
        <div className="icon">
          <FeatherIcon icon="maximize" />
        </div>
        <div className="icon">
          <FeatherIcon icon="user" />
        </div>
      </div>
    </div>
  );
}
