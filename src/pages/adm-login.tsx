import Header from "../components/header/header";
import Footer from "../components/footer";
import { Link } from "react-router-dom";
import "../style/App.css";
import { useState } from "react";
import { moduleApi } from "../Api";

export default function AdmLogin() {

  // ** LOGIN DO ADM **
  const[email,setemail]=useState('')
  const[senha,setsenha]=useState('')

  // **Funções de Login **

  const loginEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setemail(event.target.value);}
  const loginSenha = (event: React.ChangeEvent<HTMLInputElement>) => {
    setsenha(event.target.value);}

  // **API**

  const addQuadrinho = async() =>{
    let json = await moduleApi.loginAdmin(email,senha)
    
    if (json.vol) {
      alert("Login Efetuado")
    } else {
      alert("Falha ao fazer o login, tente novamente")
    }
  }
  return (
    <div>
      <Header></Header>
      <div id="wrapper-login">
        <div className="conteiner-login">
          <h1 className="tittle-login">ADM Login</h1>
          <p>Email</p>
          <input className="text-bar-login"  type="Email" placeholder="Email/Usuario" onChange={loginEmail}/>
          <p>Senha</p>
          <input className="text-bar-login"  type="Password" placeholder="Senha" onChange={loginSenha}/>
          <button id="login-button" type="submit" onClick={addQuadrinho}> Login </button>
          <Link to="/cadastro">Cadastrar</Link>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
