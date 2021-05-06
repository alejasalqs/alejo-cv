import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { AboutScreen } from "../components/AboutScreen";
import { ProyectsScreen } from "../components/ProyectsScreen";
import { Footer } from "../ui/Footer";
import { NavBar } from "../ui/NavBar";

export const AppRouter = () => {
  return (
    <Router>
      <>
        <NavBar />
        <div className="container mt-5">
          <Switch>
            <Route exact path="/about" component={AboutScreen} />
            <Route exact path="/proyects" component={ProyectsScreen} />
            <Redirect to="/about" />
          </Switch>
        </div>
        <Footer />
      </>
    </Router>
  );
};
