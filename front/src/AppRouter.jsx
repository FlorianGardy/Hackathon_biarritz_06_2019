import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home.page";
import Matches from "./pages/Matches.page";
import Campuses from "./pages/Campuses.page";
import Wilders from "./pages/Wilders.page";
import { Container } from "reactstrap";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function AppRouter() {
  return (
    <Router>
      <Container fluid className="p-5 min-vh-100">
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" exact component={Home} />
          <Route path="/campuses" exact component={Campuses} />
          <Route path="/matches" exact component={Matches} />
          <Route path="/campuses/:campusId/wilders" component={Wilders} />
        </Switch>
      </Container>
      <Footer />
    </Router>
  );
}
export default AppRouter;
