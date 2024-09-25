import "../style/App.css";
import Header from "../components/header/header";
import Footer from "../components/footer";
import { useParams } from "react-router-dom";

const editoras = [{
  id:"marvel",
  nome: "Marvel",
  logo:"https://logos-world.net/wp-content/uploads/2020/11/Marvel-Logo-2000-2012.png",
  bio: "A Marvel Comics foi fundada em 1939 como Timely Publications e se tornou uma das maiores editoras de quadrinhos do mundo, especialmente conhecida por revolucionar o gênero de super-heróis. Nos anos 1960, sob a liderança do escritor Stan Lee e dos artistas Jack Kirby e Steve Ditko, a Marvel lançou personagens icônicos como Homem-Aranha, X-Men, Quarteto Fantástico e Vingadores, criando heróis com características mais humanas, que lidavam com problemas cotidianos além de suas batalhas contra o mal. Esse foco em personagens complexos e suas relações interpessoais distinguiu a Marvel e gerou um vasto universo interconectado. A editora também foi pioneira na criação de eventos em que os personagens de diferentes histórias interagiam entre si, consolidando o universo compartilhado da Marvel. Nos anos recentes, a Marvel expandiu sua influência com o sucesso do Marvel Cinematic Universe (MCU), popularizando ainda mais seus heróis e histórias através de filmes e séries que conquistaram o público global. A Marvel continua a ser uma força dominante tanto nos quadrinhos quanto no cinema, inovando e expandindo seu legado.",
  creator1:"https://i.imgur.com/tQvugrJ.jpeg",
  creator2:"https://festivalofwritingandideas.com/wp-content/uploads/2022/04/Martin-Goodman.jpg"
},{
  id:"dc_comics",
  nome:"DC Comics",
  logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/DC_Comics_logo.svg/900px-DC_Comics_logo.svg.png",
  bio:"A DC Comics, fundada em 1934 como National Allied Publications, é uma das maiores e mais influentes editoras de quadrinhos do mundo. Sua história começou com a publicação de Action Comics #1 em 1938, que apresentou o Superman, considerado o primeiro super-herói. Essa revista foi um marco na criação do gênero de super-heróis, popularizando personagens com poderes sobre-humanos. Ao longo das décadas, a DC Comics criou ícones como Batman, Mulher-Maravilha, Flash, Lanterna Verde, e muitos outros que se tornaram centrais na cultura pop global. A editora também é conhecida por introduzir conceitos complexos como o multiverso e por desenvolver histórias mais maduras e sombrias, como Watchmen e Batman: O Cavaleiro das Trevas. A DC estabeleceu um universo coeso de heróis e vilões que interagem em diferentes histórias e, além dos quadrinhos, expandiu seu legado para animações, séries de TV e filmes, incluindo o bem-sucedido universo cinematográfico da Liga da Justiça. Hoje, a DC Comics continua a ser uma referência no mercado de entretenimento e quadrinhos, influenciando a mídia e mantendo sua relevância com novas narrativas e adaptações.",
  creator1:"https://pluspng.com/img-png/warner-bros-logo-png-warner-bros-logo-warner-bros-png-image-with-transparent-840x859.png",
  creator2:"https://www.oexplorador.com.br/exp/wp-content/uploads/2022/05/Irv_novick_drawing.jpg",
}]


const Editorapage = () => {
  const { editora } = useParams<{ editora: string }>();
  const edit = editoras.find(editoras => editoras.id === editora);

  if (!edit) {
    return <div>Página não encontrada</div>;
  }else{

    return (
      <div>
    <Header />
    <div className="editorapage">
      <div className="overlay"></div>
      <img src={edit.logo} alt="Logo da Editora" className="editor-logo" />
      <div className="bio">
        <h2>Sobre a Editora</h2>
        <p>{edit.bio}</p>
      </div>
      <div className="creators">
        <h3>Criadores</h3>
        <div className="creator-images">
          <img src={edit.creator1} alt="Autor 1" className="creator-img" />
          <img src={edit.creator2} alt="Autor 2" className="creator-img" />
        </div>
      </div>
    </div>
      <Footer />
    </div>

);
};
}

export default Editorapage;
