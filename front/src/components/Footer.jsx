import React from "react";
import { Navbar, NavLink } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { text } from "@fortawesome/fontawesome-svg-core";

const styleNavbar = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

function Footer() {
  return (
    <>
      <Navbar className="fixed-bottom justify-center navbar-dark bg-dark text-light">
        <NavLink className="ml-3 text-white text-left">
          <FontAwesomeIcon icon={faCopyright} className="mr-3 text-white" />
          2019
        </NavLink>
        <div style={styleNavbar}>
          <FontAwesomeIcon
            icon={faLinkedin}
            size="2x"
            className="mr-4"
            style={{ fontSize: "25px" }}
          />
          Réalisé par
          <NavLink
            className="text-white"
            href="https://www.linkedin.com/in/florian-gardy/"
          >
            Florian
          </NavLink>
          <NavLink
            className="text-white"
            href="https://www.linkedin.com/in/jonathan-galvao-diniz/"
          >
            Jonathan
          </NavLink>
          <NavLink
            className="text-white"
            href="https://www.linkedin.com/in/perrinemartyris/"
          >
            Perrine
          </NavLink>
          <NavLink
            className="text-white"
            href="https://www.linkedin.com/in/nathalie-balotte-1b4b3b182/"
          >
            Nathalie
          </NavLink>
          <NavLink
            className="text-white"
            href="https://www.linkedin.com/in/stephane-van-pe/"
          >
            Stéphane
          </NavLink>
        </div>
        <NavLink
          className="text-white"
          href="https://github.com/FlorianGardy/Hackathon_biarritz_06_2019"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </NavLink>
      </Navbar>
    </>
  );
}
export default Footer;
