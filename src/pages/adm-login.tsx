import Header from "../components/header/header";
import Footer from "../components/footer";
import "../style/App.css";

export default function AdmLogin() {
  return (
    <div>
      <Header></Header>
      <div id="wrapper-login">
      <div className="conteiner-login">
        <h1 className="tittle-login">ADM Login</h1>
        <p>Email</p>
        <input className="text-bar-login"  type="Email" placeholder="Email/Usuario"/>
        <p>Senha</p>
        <input className="text-bar-login"  type="Password" placeholder="Senha"/>
        <button id="login-button" type="submit"> Login </button>
      </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
