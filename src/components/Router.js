import React from "react";
import { HashRouter, Route, Redirect, Switch } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import Card from "./Card";
import Finish from "./Finish";

export default () => (
  <HashRouter>
    <>
      <Header />
      <section className="section">
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/game" component={Card} />
          <Route path="/finish/:time" component={Finish} />
          <Redirect from="*" to="/" />
        </Switch>
      </section>
      <Footer />
    </>
  </HashRouter>
);
