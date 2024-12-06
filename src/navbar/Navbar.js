import "./Navbar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React, { useState } from "react";

function NavBar() {
  const [activeLink, setActiveLink] = useState("");
  const handleNavLink = (link) => {
    setActiveLink(link);
  };
  return (
    <div className="food-navbar">
      <div className="food-responsive">
        <div className="nav-l">
          <h1>
            Yammy<span>.</span>
          </h1>
        </div>
        <div className="nav-right ">
          <div className="nav-r order-xl-3 d-md-flex">
            <button className="btn nav-r-btn">Book a Table</button>
          </div>
          <div className="nav-m  order-xl-2">
            <Navbar expand="xl" bg="light" variant="light" className="bg-body-tertiary">
              <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Offcanvas id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link
                      href="#home"
                      className={`nav-link ${
                        activeLink === "#home" ? "active" : ""
                      }`}
                      onClick={() => handleNavLink("#home")}
                    >
                      Home
                    </Nav.Link>
                    <Nav.Link
                      href="#about"
                      className={`nav-link ${
                        activeLink === "#about" ? "active" : ""
                      }`}
                      onClick={() => handleNavLink("#about")}
                    >
                      About
                    </Nav.Link>
                    <Nav.Link
                      href="#menu"
                      className={`nav-link ${
                        activeLink === "#menu" ? "active" : ""
                      }`}
                      onClick={() => handleNavLink("#menu")}
                    >
                      Menu
                    </Nav.Link>
                    <Nav.Link
                      href="#event"
                      className={`nav-link ${
                        activeLink === "#event" ? "active" : ""
                      }`}
                      onClick={() => handleNavLink("#event")}
                    >
                      Events
                    </Nav.Link>
                    <Nav.Link
                      href="#chefs"
                      className={`nav-link ${
                        activeLink === "#chefs" ? "active" : ""
                      }`}
                      onClick={() => handleNavLink("#chefs")}
                    >
                      Chefs
                    </Nav.Link>
                    <Nav.Link
                      href="#gallery"
                      className={`nav-link ${
                        activeLink === "#gallery" ? "active" : ""
                      }`}
                      onClick={() => handleNavLink("#gallery")}
                    >
                      Gallery
                    </Nav.Link>
                    <Nav.Link
                      href="#contacts"
                      className={`nav-link ${
                        activeLink === "#contacts" ? "active" : ""
                      }`}
                      onClick={() => handleNavLink("#contacts")}
                    >
                      Contacts
                    </Nav.Link>
                  </Nav>
                </Navbar.Offcanvas>
              </Container>
            </Navbar>
          </div>
        </div>
      </div>
    </div>
  );
}
export default NavBar;
