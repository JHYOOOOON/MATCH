import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import "./reset.css";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Card />
      <Footer />
    </div>
  );
}

export default App;
