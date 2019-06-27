import React from "react";
import { NavLink } from "react-router-dom";

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
            <h1>Wilders Fighting</h1>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem className="mr-3">
                <NavLink to="/">Home</NavLink>
              </NavItem>
              <NavItem className="mr-3">
                <NavLink to="/campuses">Campuses</NavLink>
              </NavItem>
              <NavItem className="mr-3">
                <NavLink to="/matches">Matches</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
