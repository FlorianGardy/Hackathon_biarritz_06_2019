import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt } from "@fortawesome/free-solid-svg-icons";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from "reactstrap";

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar
          color="dark"
          light
          expand="md"
          className="text-light"
          style={{ height: "10vh" }}
        >
          <NavbarBrand>
            <h1 style={{ fontSize: "2rem" }}>
              {" "}
              WILD{" "}
              <FontAwesomeIcon icon={faBolt} color="yellow" className="mr-3" />
              WAR
            </h1>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem className="mr-3">
                <NavLink
                  to="/home"
                  style={{
                    fontWeight: "bold",
                    color: "white",
                    textDecoration: "none"
                  }}
                  activeStyle={{ color: "#5bc15b" }}
                >
                  Home
                </NavLink>
              </NavItem>
              <NavItem className="mr-3">
                <NavLink
                  to="/campuses"
                  style={{
                    fontWeight: "bold",
                    color: "white",
                    textDecoration: "none"
                  }}
                  activeStyle={{ color: "#5bc15b" }}
                >
                  Campuses
                </NavLink>
              </NavItem>
              <NavItem className="mr-3">
                <NavLink
                  to="/matches"
                  style={{
                    fontWeight: "bold",
                    color: "white",
                    textDecoration: "none"
                  }}
                  activeStyle={{ color: "#5bc15b" }}
                >
                  Matches
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
