// Importações Bibliotecas
import FeatherIcon from "feather-icons-react";
import { Link } from "react-router-dom";

// Importações CSS
import "./header.css";

// Importações Imagens
import logo from "../../images/logo.webp";
import tape from "../../images/tape.png";

export default function Header() {
  return (
    <div className="head_wrapper">
      <div className="header">
        <div>
          <Link to="/">
            <img id="logo" src={logo} alt="" />
          </Link>
        </div>
        <div>
          <input type="text" placeholder="Pesquisar" />
        </div>
        <div className="botoes">
          <div className="icon">
            <FeatherIcon icon="menu" />
          </div>
        </div>
      </div>
      <div className="head_tape"> </div>
    </div>
  );
}
