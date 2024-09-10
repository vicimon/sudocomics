import Header from "../components/header/header";
import Footer from "../components/footer";
import "../style/catlogue_style.css";
import CatlogCollection from "../components/catlog_colec";
import seta from "../images/seta.png"
import seta_2 from "../images/seta_2.png"

export default function Catalogue() {
  return (
    <div>
      <Header />
      <div>
          <div className="catlog_page">
            <div className="catlog_content">
              <CatlogCollection />
          <div className="botao_cat">
            <button className="but_1"><img src={seta_2} width={100} /></button>
            <button className="but_2"><img src={seta} width={100}/></button>
          </div>
            </div>
          </div>
      </div>
      <Footer />
    </div>
  );
}
