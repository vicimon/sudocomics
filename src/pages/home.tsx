// import packages
import React from "react";
import { Link } from "react-router-dom";

// import components
import Header from "../components/header/header";
import Carousel from "../components/carousel";
import Footer from "../components/footer";
import Tape from "../components/tape/tape";
import CatlogCollection from "../components/catlog_colec";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="page_content">
        <Carousel />
        <h1>Quadrinhos em destaque</h1>
        <CatlogCollection></CatlogCollection>
        </div>
        <Tape></Tape>
        <div className="page_content">

        <h1>Novas HQs</h1>
        <div className="home_row">
        <CatlogCollection></CatlogCollection>
        </div>
        <ul>
          <li>
            <Link to="/catalogue">Catálogo</Link>
          </li>
        </ul>
        </div>
        <Footer />
      </div>
  )
}
