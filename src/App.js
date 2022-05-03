import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import React from "react";
import { css } from "styled-components/macro"; //eslint-disable-line

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "pages/Home";
import About from "pages/About";
import Contact from "pages/Contact";
import Header from "components/custom/Header";
import Footer from "components/custom/Footer";
import FAQs from "pages/FAQs";
import DataPrivacy from "pages/DataPrivacy";
export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/privacy">
          <DataPrivacy />
        </Route>
        <Route exact path="/FAQs">
          <FAQs />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}
