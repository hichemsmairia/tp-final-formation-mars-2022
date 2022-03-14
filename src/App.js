import './App.css';
import React from "react";
import Header from './components/Header';
import Main from './components/Main';
import Devices_Section from './components/Devices_Section';
import Download_section from './components/Download_section';
import Everywhere from './components/Everywhere';
import Footer from './components/Footer';
function App() {
  return (
    <>
     <Header/>
     <Main/>
     <Devices_Section/>
     <Download_section/>
     <Everywhere/>
     <Footer/>
    </>
  );
}


export default App;
