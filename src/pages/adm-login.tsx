import Header from "../components/header/header";
import Footer from "../components/footer";
import "../style/App.css";

export default function AdmLogin() {
  return (
    <div className="conteiner-login-fundo">
      <Header></Header>
      <div className="conteiner-login">
        <h1 className="tittle-login">ADM Login</h1>
        <p>Email</p>
        <input className="text-bar-login"  type="Email" placeholder="Email/Usuario"/>
        <p>Senha</p>
        <input className="text-bar-login"  type="Password" placeholder="Senha"/>
        <p>Teste</p>
        <input className="text-bar-login"  type="text" placeholder="bucetinha"/>
      </div>
      <Footer></Footer>
    </div>
  );
}
