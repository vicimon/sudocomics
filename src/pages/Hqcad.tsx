import { useState } from "react";
import Header from "../components/header/header";
import Footer from "../components/footer";
import "../style/App.css";
import { moduleApi } from "../Api";


export default function CadHq() {

  /*Adição de conteúdo */
  const[vol,setVol]=useState('');
  const[editora,setEditora]=useState('');
  const[colecao,setColecao]=useState('');
  const[imagem,setImagem]=useState('');
  const[usuario,setUsuario]=useState('');
  const[lancamento,setLancamento]=useState('');

  // *Funções*
  const cadVol = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVol(event.target.value);
  }
  const cadLancamento = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLancamento(event.target.value);
  }
  const cadEditora = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditora(event.target.value);
  }
  const cadColecao = (event: React.ChangeEvent<HTMLInputElement>) => {
    setColecao(event.target.value);
  }
  const cadImagem = (event: React.ChangeEvent<HTMLInputElement>) => {
    setImagem(event.target.value);
  }
  const cadUsuario = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsuario(event.target.value);
  }
// Api

const addQuadrinho = async() =>{
  let json = await moduleApi.adicionarQuadrinho(vol,colecao,lancamento,imagem,editora,usuario)
  
  if (json.id) {
    alert("Quadrinho inserido")
  } else {
    alert("Erro ao inserir quadrinho")
  }

}
    return (
    <div className="conteiner-login-fundo">
      <Header></Header>
      <div className="conteiner-cadastro-adm">
        <form className="conteudo-cadAdm">
            <h1>Cadastro HQ</h1>
            <input className="text-bar-cadAdm"  type="text" placeholder="Nome da HQ" onChange={cadColecao}/>
            <input className="text-bar-cadAdm"  type="text" placeholder="Vol." onChange={cadVol}/>
            <input className="text-bar-cadAdm"  type="text" placeholder="Lnaçamento" onChange={cadLancamento}/>
            <input className="text-bar-cadAdm"  type="text" placeholder="Autor"/>
            <input className="text-bar-cadAdm"  type="text" placeholder="Editora" onChange={cadEditora}/>
            <input className="text-bar-cadAdm"  type="text" placeholder="Imagem" onChange={cadImagem}/>
            <input className="text-bar-cadAdm"  type="text" placeholder="Usuario" onChange={cadUsuario}/>
        
            <button className="botao-cadAdm" onClick={addQuadrinho}>Entregar</button>
        </form>
      </div>
      <Footer></Footer>
    </div>
  );
}
