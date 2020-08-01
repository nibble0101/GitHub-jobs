import React from "react";
import Header from "./components/header/Header";
import Routes from "./components/routes/Routes";
import Footer from "./components/footer/Footer";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes />
      <Footer />
    </div>
  );
}
