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
        <Navbar color="dark" light expand="md" className="text-light">
          <NavbarBrand>
            <h1>
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
                  to="/"
                  style={{
                    fontWeight: "bold",
                    color: "white"
                  }}
                >
                  Home
                </NavLink>
              </NavItem>
              <NavItem className="mr-3">
                <NavLink
                  to="/campuses"
                  style={{
                    fontWeight: "bold",
                    color: "white"
                  }}
                >
                  Campuses
                </NavLink>
              </NavItem>
              <NavItem className="mr-3">
                <NavLink
                  to="/matches"
                  style={{
                    fontWeight: "bold",
                    color: "white"
                  }}
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
