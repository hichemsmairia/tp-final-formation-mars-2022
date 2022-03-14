import React from "react";
//importaion d'une image ! 
import img from "../assets/netflix.svg";
export default function Header() {
  return (
    <header className="Header">
      <img src={img} alt="netflix logo" />

      <a href="#"> Entrer </a>
    </header>
  );
}
