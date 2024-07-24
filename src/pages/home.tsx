// import packages
import React from "react";
import { Link } from "react-router-dom";

// import components
import Header from "../components/header/header";
import Carousel from "../components/carousel";
import Footer from "../components/footer";
import Tape from "../components/tape/tape";

export default function Home() {
  return (
    <div>
      <Header />
      {/* <Tape></Tape> */}
      <div className="page_content">
        <Carousel />
        <h1>Novas HQs</h1>
        <ul>
          <li>
            <Link to="/catalogue">Catálogo</Link>
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  );
}
