import { NavLink } from "react-router-dom";

function Inicio() {
  return (
    <>
      <section>
        <div>
          <img
            className="img-fluid"
            src="../src/assets/poster-inicio.png"
            alt="poster de nutricion"
          />
          <div className="container text-black py-5">
            <div className="row">
              <div className="col-lg-6">
                <div className="mb-4">
                  <img
                    className="img-fluid rounded shadow-sm"
                    src="../src/assets/fernando-nutricionista.png"
                    alt="imagen de Fernando Díaz"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <h1 className="mb-4">Fernando Díaz</h1>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate libero voluptatum quas, pariatur perspiciatis totam
                  dignissimos quo accusamus autem, nesciunt ipsa nam temporibus,
                  consequatur distinctio? Reprehenderit autem maiores totam
                  numquam.
                </p>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate libero voluptatum quas, pariatur perspiciatis totam
                  dignissimos quo accusamus autem, nesciunt ipsa nam temporibus,
                  consequatur distinctio? Reprehenderit autem maiores totam
                  numquam.
                </p>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate libero voluptatum quas, pariatur perspiciatis totam
                  dignissimos quo accusamus autem, nesciunt ipsa nam temporibus,
                  consequatur distinctio? Reprehenderit autem maiores totam
                  numquam.
                </p>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate libero voluptatum quas, pariatur perspiciatis totam
                  dignissimos quo accusamus autem, nesciunt ipsa nam temporibus,
                  consequatur distinctio? Reprehenderit autem maiores totam
                  numquam.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-primary py-5 text-center text-black shadow">
          <div className="container">
            <p className="fw-bold mb-4 text-black fs-5">
              ES HORA DE EMPEZAR A CUIDARTE
            </p>
            <button className="btn btn-outline-light fw-bold me-2">
              <i className="bi bi-telephone-fill me-2"></i>1 111 111
            </button>
            <button className="btn btn-outline-light fw-bold ms-2">
              <i className="bi bi-calendar-check-fill me-2"></i>Pide Cita Online
            </button>
          </div>
        </div>
        <div className="bg-body-tertiary py-4">
          <div className="container">
            <p className="text-black fs-3 text-center fw-bold mb-4">
              SERVICIOS
            </p>
            <div className="row">
              <div className="col-lg-4">
                <NavLink
                  className="text-decoration-none"
                  to="/servicios/consulta-nutricional"
                >
                  <div className="card shadow-sm card-styles cursor-pointer mb-5">
                    <img
                      src="../src/assets/consulta-nutricional.png"
                      className="card-img-top image-card-styles"
                      alt="consulta nutricional"
                    />
                    <div className="card-body">
                      <h5 className="card-title  text-center text-black ">
                        Consulta Nutricional
                      </h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <div className="d-flex justify-content-center">
                        <NavLink
                          to="/servicios/consulta-nutricional"
                          className="btn btn-primary fw-bold px-4 py-2 text-center position-absolute shadow-sm button-card-styles"
                        >
                          Ver detalles
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </NavLink>
              </div>
              <div className="col-lg-4">
                <NavLink
                  className="text-decoration-none"
                  to="/servicios/master-nutricion"
                >
                  <div className="card shadow-sm card-styles cursor-pointer mb-5">
                    <img
                      src="../src/assets/master-nutricion.png"
                      className="card-img-top image-card-styles"
                      alt="consulta nutricional"
                    />
                    <div className="card-body">
                      <h5 className="card-title  text-center text-black ">
                        Consulta Nutricional
                      </h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <div className="d-flex justify-content-center">
                        <NavLink
                          to="/servicios/consulta-nutricional"
                          className="btn btn-primary fw-bold px-4 py-2 text-center position-absolute shadow-sm button-card-styles"
                        >
                          Ver detalles
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        <div className="servicios-inicio-styles py-5 shadow">
          <h2 className="text-black text-center mb-5">NUESTROS SERVICIOS</h2>
          <div className="container">
            <div className="row">
              <div className="col-lg-6 text-black">
                <div className="mb-4 text-center">
                  <NavLink to="servicios/consulta-nutricional">
                    <img
                      className="img-fluid rounded shadow-sm mb-4 image-service-style"
                      src="../src/assets/consulta-nutricional.png"
                      alt="servicio de consulta nutricional"
                    />
                    <p className="text-center fs-3 text-black text-">
                      Consulta Nutricional
                    </p>
                  </NavLink>
                  <p className="text-start">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sunt doloremque cum nobis corrupti quae voluptatem, dolor
                    autem voluptatum! Labore similique illum perspiciatis
                    laborum ipsa maiores excepturi nulla neque, corrupti
                    voluptas.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 text-black">
                <div className="text-center">
                  <NavLink to="/servicios/master-nutricion">
                    <img
                      className="img-fluid rounded shadow-sm mb-4 image-service-style"
                      src="../src/assets/master-nutricion.png"
                      alt="servicio de master en nutricion deportiva"
                    />
                    <p className="text-center fs-3 text-black">
                      Consulta Nutricional
                    </p>
                  </NavLink>
                  <p className="text-start">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sunt doloremque cum nobis corrupti quae voluptatem, dolor
                    autem voluptatum! Labore similique illum perspiciatis
                    laborum ipsa maiores excepturi nulla neque, corrupti
                    voluptas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-black text-center shadow py-4">
          <div className="container">
            <div className="row">
              <div className="col-4">
                <div className="text-white">
                  <p className="fs-1 fw-bold text-primary">+ 20</p>
                  <p className="fs-5 paragraph-achievement-small">
                    años de experiencia
                  </p>
                </div>
              </div>
              <div className="col-4">
                <div className="text-white">
                  <p className="fs-1 fw-bold text-primary">+ 5.000</p>
                  <p className="fs-5 paragraph-achievement-small">
                    pacientes satisfechos
                  </p>
                </div>
              </div>
              <div className="col-4">
                <div className="text-white">
                  <p className="fs-1 fw-bold text-primary">N° 1</p>
                  <p className="fs-5 paragraph-achievement-small">
                    nutricionista en Madrid
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Inicio;
