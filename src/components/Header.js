import React from "react";
//importaion d'une image !
import img from "../assets/netflix.svg";

import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header className="Header">
      <img src={img} alt="netflix logo" />

      <li>
        <Link to="/">HOME</Link>{" "}
      </li>
      <li>
        {" "}
        <Link to="/devices">DEVICES</Link>
      </li>
      <li>
        {" "}
        <Link to="/download">DOWNLOAD</Link>
      </li>
      <li>
        {" "}
        <Link to="/everywhere">EVERYWHERE</Link>
      </li>
      <li>
        {" "}
        <Link to="/movies">MOVIES</Link>
      </li>
    </header>
  );
}
