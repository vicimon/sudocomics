import "./index.css";
import Marvel from "../../images/marvel.webp";
import DC from "../../images/dc.webp";
import Carousel01 from "../../images/carousel-1.webp";
import { Link } from "react-router-dom";

export default function Carousel() {
  return (
    <div id="carousel-wrapper">
      <div className="XLsqr">
        <span>
          <img id="principal" src={Carousel01} alt="" />
        </span>
        <Link to="/The-Avengers" className="carouselLinks"></Link>
      </div>
      <div className="Ssqrs">
        <div className="Ssqr">
          <span>
            <img src={Marvel} alt="" />
          </span>
          <a className="bannerLinkS" href="#"></a>
        </div>
        <div className="Ssqr">
          <span>
            <img src={DC} alt="" />
          </span>
          <a className="bannerLinkS" href="#"></a>
        </div>
      </div>
    </div>
  );
}
