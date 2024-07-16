// import packages
import React from "react";
import { Routes, Route } from "react-router-dom";

// import components
import Header from "../components/header/header";
import Carousel from "../components/carousel";
import Footer from "../components/footer";
import Tape from "../components/tape/tape";
import ComicsContainer from "../components/comicsContainer/comicsContainer";

export default function Home() {
  return (
    <div>
      <Header />
      <Carousel />
      <Tape></Tape>
      <div className="home_content">
        <h1>Novas HQs</h1>
        <ComicsContainer />
      </div>
      <Footer />
    </div>
  );
}
