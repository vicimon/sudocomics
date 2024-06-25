import Header from "../components/header/header";
import Body from "../components/body/body";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import { Routes, Route } from "react-router-dom";

export default function Home() {
    return(
        <div>
 
        <Header />

        <Body />
    </div>
    
    
    )
}