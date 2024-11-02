import { NavLink } from "react-router-dom";

function Servicios() {
  return (
    <>
      <div className="container py-5 text-black text-center">
        <h1 className="text-center fw-bold text-black mb-5">Servicios</h1>
        <div className="row">
          <div className="col-lg-6">
            <div className="mb-5">
              <h4 className="text-center mb-4">Consulta Nutricional</h4>
              <NavLink to="/servicios/master-nutricion">
                <img
                  className="img-fluid shadow image-service-style rounded"
                  src="../src/assets/consulta-nutricional.png"
                  alt="poster de Master de Nutrición deportiva"
                />
              </NavLink>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="">
              <h4 className="text-center mb-4">Master: Nutrición Deportiva</h4>
              <NavLink to="/servicios/master-nutricion">
                <img
                  className="img-fluid shadow image-service-style rounded"
                  src="../src/assets/master-nutricion.png"
                  alt="poster de Master de Nutrición deportiva"
                />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Servicios;
