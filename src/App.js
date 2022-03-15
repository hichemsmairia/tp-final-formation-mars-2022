import "./App.css";
import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Devices_Section from "./components/Devices_Section";
import Download_section from "./components/Download_section";
import Everywhere from "./components/Everywhere";
import Footer from "./components/Footer";
import Movies from "./components/Movies";
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/devices" element={<Devices_Section />} />
        <Route path="/download" element={<Download_section />} />
        <Route path="/everywhere" element={<Everywhere />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
