import Header from "../components/header/header"
import Footer from "../components/footer"
import { Link } from "react-router-dom"
import React, { useState } from "react"

export default function AdmCadastro(){

    const [usuario,setUsuario] = useState("");
    const [email,setEmail] = useState("");
    const [senha,setSenha] = useState("");

    const changeUsuario = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsuario(event.target.value);
    }
    const changeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    }
    const changeSenha = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSenha(event.target.value);
    }
    
    const submitHandler = () => {
        
    }

    return(
        <div>
        <Header></Header>
            <div id="wrapper-login">
                <div className="conteiner-login">
                    <h1 className="tittle-login">Cadastro de ADM</h1>
                    <p>Usuário</p>
                    <input className="text-bar-login"  type="text" placeholder="Usuário" onChange={changeUsuario}/>
                    <p>Email</p>
                    <input className="text-bar-login"  type="Email" placeholder="Email" onChange={changeEmail}/>
                    <p>Senha</p>
                    <input className="text-bar-login"  type="Password" placeholder="Senha" onChange={changeSenha}/>
                    <button id="login-button" type="submit"> Cadastrar </button>
                    <Link to="/admlogin">Fazer Login</Link>
                </div>
            </div>
        <Footer></Footer>
        </div>
    )
}