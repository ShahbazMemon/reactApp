import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from "./home";
import About from "./About";
import "./App.css";
import Button from "@material-ui/core/Button";
import myform from "./boooking_form";
import booking_details from "./booking_details";

class Routes extends Component {
  render() {
    return (
      <Router>
        <div>
          <Button size="small" color="primary">
            <Link to="/myform">Availble</Link>
          </Button>
          <Switch>
            <Route exact path="/myform" component={myform}></Route>
            <Route exact path="/booking" component={booking_details}></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Routes;
