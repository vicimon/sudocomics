// Import de bibliotecas
import { Link } from "react-router-dom";

import "./index.css";

export default function Footer() {
  return (
    <div id="foo-wrapper">
      <div className="left">
        <div className="app-logo">
          <Link to="/" style={{ textDecoration: "none", color: "#000" }}>
            <h3>Sudo-Comics</h3>
          </Link>
        </div>
        <p>
          Leia seus quadrinhos e mangás favoritos com o <span>Sudo Comics</span>
        </p>
      </div>
      <div className="right">
        <h3>Aviso Legal</h3>
        <p>
          <span>Sudo Comics</span> não hospeda nenhum arquivo, apenas fornece
          links para serviços de terceiros. Questões legais devem ser tratadas
          com os hosts de arquivos e provedores. <span>Sudo Comics</span> não é
          responsável por quaisquer arquivos de mídia exibidos pelos provedores
          de imagens.
        </p>
      </div>
    </div>
  );
}
