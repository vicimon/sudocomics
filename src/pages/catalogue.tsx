import Header from "../components/header/header";
import Footer from "../components/footer";
import "../style/catlogue_style.css";
import CatlogCollection from "../components/catlog_colec";

export default function Catalogue() {
  return (
    <div>
      <Header />
      <div>
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
