import React from "react";
import { Navbar, NavLink } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <>
      <Navbar className="fixed-bottom justify-center navbar-dark bg-dark text-light">
        <NavLink href="https://www.linkedin.com/in/florian-gardy/">
          <FontAwesomeIcon icon={faCopyright} />
          2019 Réalisé par
          <FontAwesomeIcon icon={faLinkedin} className="mr-3" />
          Florian
        </NavLink>

        <NavLink href="https://www.linkedin.com/in/jonathan-galvao-diniz/">
          Jonathan
        </NavLink>

        <NavLink href="https://www.linkedin.com/in/perrinemartyris/">
          Perrine
        </NavLink>

        <NavLink href="https://www.linkedin.com/in/nathalie-balotte-1b4b3b182/">
          Nathalie
        </NavLink>

        <NavLink href="https://www.linkedin.com/in/stephane-van-pe/">
          Stéphane
        </NavLink>
      </Navbar>
    </>
  );
}
export default Footer;
