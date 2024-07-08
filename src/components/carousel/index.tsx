import "./index.css";
import Marvel from "../../images/marvel.webp";
import DC from "../../images/dc.webp";
import Carousel01 from "../../images/carousel-1.webp";

export default function Carousel() {
  return (
    <div id="carousel-wrapper">
      <div className="XLsqr">
        <span>
          <img src={Carousel01} alt="" />
        </span>
        <a className="carouselLinks" href="#"></a>
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
