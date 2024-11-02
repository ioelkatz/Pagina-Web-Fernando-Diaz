import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";

function TopNavbar() {
  useEffect(() => {
    const navbarElement = document.querySelector("#uniqueNavbar");
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 56) {
        navbarElement.classList.remove("navbar-styles");
        navbarElement.classList.add("navbar-scrolled");
      } else if (window.scrollY < 56) {
        navbarElement.classList.remove("navbar-scrolled");
        navbarElement.classList.add("navbar-styles");
      }
    });
  });

  return (
    <>
      <Navbar
        expand="lg"
        className=" w-100 fixed-top navbar-transition navbar-styles"
        id="uniqueNavbar"
      >
        <Container>
          <Navbar.Brand>
            <NavLink className="link-inactive">Dietética Avanzada</NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "link-active mx-1" : "link-inactive mx-1"
                }
                to="/"
              >
                Inicio
              </NavLink>

              <NavLink
                className={({ isActive }) =>
                  isActive ? "link-active mx-1" : "link-inactive mx-1"
                }
                to="/sobre-mi"
              >
                ¿Quién Soy?
              </NavLink>

              <NavDropdown
                title="Servicios"
                id="basic-nav-dropdown"
                className="mx-1 text-black"
              >
                <NavDropdown.Item as={NavLink} to="servicios/consulta-nutricional">
                  Consulta Nutricional
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  className={({ isActive }) =>
                    isActive ? "link-active" : "link-inactive"
                  }
                  as={NavLink}
                  to="/servicios/master-nutricion"
                >
                  Master: Nutrición Deportiva
                </NavDropdown.Item>
              </NavDropdown>

              <NavLink
                className={({ isActive }) =>
                  isActive ? "link-active mx-1" : "link-inactive mx-1"
                }
                to="/testimonios"
              >
                Testimonios
              </NavLink>

              <NavLink
                className={({ isActive }) =>
                  isActive ? "link-active mx-1" : "link-inactive mx-1"
                }
                to="/contacto"
              >
                Contacto
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default TopNavbar;
