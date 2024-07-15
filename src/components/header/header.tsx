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
      <div className="head">
        <div>
          <Link to="/">
            <img id="head_logo" src={logo} alt="" />
          </Link>
        </div>
        <div>
          <input type="text" placeholder="Pesquisar" />
        </div>
        <div className="head_botoes">
          <div className="head_icon">
            <FeatherIcon icon="menu" />
          </div>
        </div>
      </div>
      <div className="head_tape"> </div>
    </div>
  );
}
