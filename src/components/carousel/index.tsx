import "../../style/App.css";
import Marvel from "../../images/marvel.webp";
import DC from "../../images/dc.webp";
import Carousel01 from "../../images/carousel-1.webp";
import { Link } from "react-router-dom";

export default function Carousel() {
  return (
    <div id="car_wrapper">
      <div className="car_XLsqr">
        <span>
          <img id="principal" src={Carousel01} alt="" />
        </span>
        <Link to="/The-Avengers" className="car_Links"></Link>
      </div>
      <div className="car_Ssqrs">
        <div className="car_Ssqr">
          <span>
            <img src={Marvel} alt="" />
          </span>
          <a className="car_bannerLinkS" href="#"></a>
        </div>
        <div className="car_Ssqr">
          <span>
            <img src={DC} alt="" />
          </span>
          <a className="car_bannerLinkS" href="#"></a>
        </div>
      </div>
    </div>
  );
}
