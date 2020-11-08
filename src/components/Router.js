import React from "react";
import { HashRouter, Route, Redirect, Switch } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";
import Card from "./Card";
import Finish from "./Finish";
import Rank from "./Rank";

export default () => (
  <HashRouter>
    <>
      <Header />
      <section className="section">
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/game" component={Card} />
          <Route path="/rank" component={Rank} />
          <Route path="/finish/:time" component={Finish} />
          <Redirect from="*" to="/" />
          <Redirect from="/game" to="/" />
        </Switch>
      </section>
    </>
  </HashRouter>
);
