import "./index.css";

export default function Footer() {
  return (
    <div id="foo-wrapper">
      <div className="left">
        <div className="app-logo">
          <h3>Sudo-Comics</h3>
        </div>
        <p>Leia seus quadrinhos e mangás favoritos com o Sudo Comics</p>
      </div>
      <div className="right">
        <h3>Aviso Legal</h3>
        <p>
          Sudo Comics não hospeda nenhum arquivo, apenas fornece links para
          serviços de terceiros. Questões legais devem ser tratadas com os hosts
          de arquivos e provedores. Sudo Comics não é responsável por quaisquer
          arquivos de mídia exibidos pelos provedores de imagens.
        </p>
      </div>
    </div>
  );
}
