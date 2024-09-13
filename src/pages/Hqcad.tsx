import { useState } from "react";
import Header from "../components/header/header";
import Footer from "../components/footer";
import "../style/App.css";
import { moduleApi } from "../Api";


export default function CadHq() {

  /*Adição de conteúdo */
  const[quadrinho,setQuadrinho]=useState('');
  const[editora,setEditora]=useState('');
  const[autor,setAutor]=useState('');

  // /*Funções*/ tentei fazer aqui mas esqueci de subir a aula do paulo pro meu git e fiquei sem saber como continuar(Viniwonk)
  // const criaQuadrinho = async () => {
  //   let response = await moduleApi.json(); 
  // }

  return (
    <div className="conteiner-login-fundo">
      <Header></Header>
      <div className="conteiner-cadastro-adm">
        <div className="conteudo-cadAdm">
            <h1>Cadastro HQ</h1>
            <input className="text-bar-cadAdm"  type="text" placeholder="Nome da HQ"/>
            <input className="text-bar-cadAdm"  type="text" placeholder="Vol."/>
            <input className="text-bar-cadAdm"  type="text" placeholder="coleção"/>
            <input className="text-bar-cadAdm"  type="text" placeholder="Autor"/>
            <input className="text-bar-cadAdm"  type="text" placeholder="Editora"/>
            <input className="text-bar-cadAdm"  type="text" placeholder="Imagen"/>
        
            <button className="botao-cadAdm" /*onClick={criaQuadrinho}*/>Entregar</button>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
