// import packages
import React from "react";
import { Routes, Route } from "react-router-dom";

// import components
import Header from "../components/header/header";
import Carousel from "../components/carousel";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Carousel />
      <Footer />
    </div>
  );
}
