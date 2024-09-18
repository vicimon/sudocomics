import { useState } from "react";
import Header from "../components/header/header";
import Footer from "../components/footer";
import "../style/App.css";
import { moduleApi } from "../Api";


export default function CadHq() {

  // **Adição de conteúdo**
    const[vol,setVol]=useState('');
    const[editora,setEditora]=useState('');
    const[colecao,setColecao]=useState('');
    const[imagem,setImagem]=useState('');
    const[usuario,setUsuario]=useState('');
    const[lancamento,setLancamento]=useState('');

  // **Alteração de conteúdo **
    const[altvol,setAltVol]=useState('');
    const[alteditora,setAltEditora]=useState('');
    const[altcolecao,setAltColecao]=useState('');
    const[altimagem,setAltImagem]=useState('');
    const[altusuario,setAltUsuario]=useState('');
    const[altlancamento,setAltLancamento]=useState('');

  // **Funções de cadastro**
    const cadVol = (event: React.ChangeEvent<HTMLInputElement>) => {
      setVol(event.target.value);}
    const cadLancamento = (event: React.ChangeEvent<HTMLInputElement>) => {
      setLancamento(event.target.value);}
    const cadEditora = (event: React.ChangeEvent<HTMLInputElement>) => {
      setEditora(event.target.value);}
    const cadColecao = (event: React.ChangeEvent<HTMLInputElement>) => {
      setColecao(event.target.value);}
    const cadImagem = (event: React.ChangeEvent<HTMLInputElement>) => {
      setImagem(event.target.value);}
    const cadUsuario = (event: React.ChangeEvent<HTMLInputElement>) => {
      setUsuario(event.target.value);}

  // **Funções de alteração**
    const altVol = (event: React.ChangeEvent<HTMLInputElement>) => {
      setAltVol(event.target.value);}
    const altLancamento = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAltLancamento(event.target.value);}
    const altEditora = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAltEditora(event.target.value);}
    const altColecao = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAltColecao(event.target.value);}
    const altImagem = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAltImagem(event.target.value);}
    const altUsuario = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAltUsuario(event.target.value);}


  // **Api**
    const addQuadrinho = async() =>{
      let json = await moduleApi.adicionarQuadrinho(vol,colecao,lancamento,imagem,editora,usuario)
      
      if (json.vol) {
        alert("Quadrinho inserido")
      } else {
        alert("Erro ao inserir quadrinho")
      }
    }
    const altQuadrinho = async() =>{
      let json = await moduleApi.alteraQuadrinho(altvol,altcolecao,altlancamento,altimagem,alteditora,altusuario)
      if (json.altvol) {
        alert("Quadrinho alterado")
      } else {
        alert("Erro ao alterar quadrinho")
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
                <input className="text-bar-cadAdm"  type="text" placeholder="Lançamento" onChange={cadLancamento}/>
                <input className="text-bar-cadAdm"  type="text" placeholder="Autor"/>
                <input className="text-bar-cadAdm"  type="text" placeholder="Editora" onChange={cadEditora}/>
                <input className="text-bar-cadAdm"  type="text" placeholder="Imagem" onChange={cadImagem}/>
                <input className="text-bar-cadAdm"  type="text" placeholder="Usuário" onChange={cadUsuario}/>
            
                <button className="botao-cadAdm" onClick={addQuadrinho}>Adicionar</button>
            </form>
          </div>
          <div className="conteiner-cadastro-adm">
            <form className="conteudo-cadAdm">
                <h1>Alteração HQ</h1>
                <input className="text-bar-cadAdm"  type="text" placeholder="Nome da HQ" onChange={altColecao}/>
                <input className="text-bar-cadAdm"  type="text" placeholder="Vol." onChange={altVol}/>
                <input className="text-bar-cadAdm"  type="text" placeholder="Lançamento" onChange={altLancamento}/>
                <input className="text-bar-cadAdm"  type="text" placeholder="Autor"/>
                <input className="text-bar-cadAdm"  type="text" placeholder="Editora" onChange={altEditora}/>
                <input className="text-bar-cadAdm"  type="text" placeholder="Imagem" onChange={altImagem}/>
                <input className="text-bar-cadAdm"  type="text" placeholder="Usuário" onChange={altUsuario}/>
            
                <button className="botao-cadAdm" onClick={altQuadrinho}>Alterar</button>
            </form>
          </div>
        <Footer></Footer>
      </div>
  );
}

