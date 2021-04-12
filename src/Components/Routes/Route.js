import React from "react";
import { BrowserRouter as Router , Switch , Route } from "react-router-dom";
import Home from '../Pages/Home';
import About from '../Pages/Contact';
import { Redirect } from 'react-router';

export default function index() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
              <Redirect to="/Home" />
          </Route>
          <Route path="/Home">
            <Home />
          </Route>
          <Route path="/Contact">
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


