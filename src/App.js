import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import "./reset.css";
import "./App.scss";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <Header />
      <section className="section">
        <Main />
      </section>
      <Footer />
    </div>
  );
}

export default App;
