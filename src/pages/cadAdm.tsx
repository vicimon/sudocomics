import Header from "../components/header/header";
import Footer from "../components/footer";
import "../style/App.css";

export default function CadAdm() {
  return (
    <div className="conteiner-login-fundo">
      <Header></Header>
      <div className="conteiner-cadastro-adm">
        <div className="conteudo-cadAdm">
            <h1>Cadastro HQ</h1>
            <input className="text-bar-cadAdm"  type="text" placeholder="Nome da HQ"/>
            <input className="text-bar-cadAdm"  type="text" placeholder="Vol."/>
            <input className="text-bar-cadAdm"  type="text" placeholder="coleção"/>
            <input className="text-bar-cadAdm"  type="text" placeholder="Imagen"/>
        
            <button className="botao-cadAdm">Entregar</button>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
