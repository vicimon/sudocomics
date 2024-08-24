import Header from "../components/header/header";
import Footer from "../components/footer";
import "../style/App.css";
import CatlogCollection from "../components/catlog_colec";

export default function Catalogue() {
  return (
    <div>
      <Header />
      <div>
        <h1 className="titulo_catlog">C ATALOGO</h1>
        <div className="catlog_page">
          <div className="catlog_content">
            <CatlogCollection />
        </div>
          </div>
      </div>
      <Footer />
    </div>
  );
}
