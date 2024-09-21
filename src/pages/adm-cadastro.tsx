import Header from "../components/header/header"
import Footer from "../components/footer"
import { Link } from "react-router-dom"
import React, { useState } from "react"
import { moduleApi } from "../Api";

export default function AdmCadastro(){
    // **Criação de Usuário**
    const [usuario,setUsuario] = useState("");
    const [email,setEmail] = useState("");
    const [senha,setSenha] = useState("");

    // **Funções de criação**
    const changeUsuario = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsuario(event.target.value);
    }
    const changeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    }
    const changeSenha = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSenha(event.target.value);
    }
    
    // **API**
    const submitHandler = async() => {
        let json = await moduleApi.adcionarAdmin(usuario,email,senha)
        if (json.vol) {
            alert("Criação bem suscedida")
          } else {
            alert("Erro ao criar a conta")
          }
        }

    return(
        <div>
        <Header></Header>
            <div id="wrapper-login">
                <div className="conteiner-loginADM">
                    <h1 className="tittle-login">Cadastro de ADM</h1><br />
                    {/* <p>Usuário</p> */}
                    <input className="text-bar-login"  type="text" placeholder="Usuário" onChange={changeUsuario}/>
                    {/* <p>Email</p> */}
                    <input className="text-bar-login"  type="Email" placeholder="Email" onChange={changeEmail}/>
                    {/* <p>Senha</p> */}
                    <input className="text-bar-login"  type="Password" placeholder="Senha" onChange={changeSenha}/>
                    <button id="login-button" type="submit" onClick={submitHandler}> Cadastrar </button>
                    <Link to="/admlogin">Fazer Login</Link>
                </div>
            </div>
        <Footer></Footer>
        </div>
    )
}