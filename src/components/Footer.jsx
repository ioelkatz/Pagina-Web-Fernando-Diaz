import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="footer-background py-3">
        <div className="container text-white">
          <div className="row">
            <div className="col-6 text-center ">
              <NavLink
                className="link-inactive me-3 fs-5"
                target="_blank"
                to="https://www.instagram.com/dietetica_avanzada/"
              >
                <i className="bi bi-instagram"></i>
              </NavLink>
              <NavLink
                className="link-inactive me-3 fs-5"
                target="_blank"
                to="https://www.youtube.com/channel/UCtyfsmZvZv-SEfmLWNypWBg"
              >
                <i className="bi bi-youtube"></i>
              </NavLink>
              <NavLink
                className="link-inactive fs-5"
                target="_blank"
                to="https://www.facebook.com/fernando.diaz.dietetica.avanzada"
              >
                <i className="bi bi-facebook"></i>
              </NavLink>
            </div>
            <div className="col-6 text-center">
              <NavLink className="link-inactive me-1" to="/testimonios">
                Política de Privacidad |
              </NavLink>
              <NavLink className="link-inactive me-1" to="/testimonios">
                Política de Cookies |
              </NavLink>
              <NavLink className="link-inactive" to="/testimonios">
                Aviso Legal
              </NavLink>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
