import Header from "../components/header/header";
import Footer from "../components/footer";
import "../style/App.css";
import CatlogCollection from "../components/catlog_colec";

export default function Catalogue() {
  return (
    <div>
      <Header />
      <h1 className="page_content">CATALOGO</h1>
        <div className="catlog_page">
          <div className="catlog_content"><CatlogCollection/></div>
          <div className="catlog_content"><CatlogCollection/></div>
          <div className="catlog_content"><CatlogCollection/></div>
          <div className="catlog_content"><CatlogCollection/></div>
          <div className="catlog_content"><CatlogCollection/></div>

        </div>
        <div className="catlog_page">
          <div className="catlog_content"><CatlogCollection/></div>
          <div className="catlog_content"><CatlogCollection/></div>
          <div className="catlog_content"><CatlogCollection/></div>
          <div className="catlog_content"><CatlogCollection/></div>
          <div className="catlog_content"><CatlogCollection/></div>

        </div>
      <Footer />
    </div>
  );
}
