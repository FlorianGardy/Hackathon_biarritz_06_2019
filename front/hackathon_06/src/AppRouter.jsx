import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home.page";
import Matches from "./pages/Matches.page";
import Campuses from "./pages/Campuses.page";
import Wilders from "./pages/Wilders.page";

function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/campuses" exact component={Campuses} />
        <Route path="/matches" exact component={Matches} />
        <Route path="/campuses/:campus" exact component={Wilders} />
      </Switch>
    </Router>
  );
}
export default AppRouter;
