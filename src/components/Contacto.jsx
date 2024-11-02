function Contacto() {
  return (
    <>
      <div className="container py-5">
        <h1 className="text-center fw-bold text-black my-5">Contáctanos</h1>
        <div className="row">
          <div className="col-md-6">
            <div className="d-flex justify-content-center mb-4">
              <img
                className="img-fluid shadow rounded"
                src="/images/fernando-nutricionista.png"
                alt="Imagen de Fernando Díaz"
              />
            </div>
          </div>
          <div className="col-md-6">
            <form>
              <div className="mb-3">
                <label htmlFor="nombre1" className="form-label">
                  Nombre
                </label>
                <input
                  placeholder="Escribe tu nombre..."
                  type="password"
                  name="nombre1"
                  className="form-control"
                  id="nombre1"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email1" className="form-label">
                  Correo electrónico
                </label>
                <input
                  placeholder="Escribe tu correo..."
                  type="email"
                  className="form-control"
                  name="email1"
                  id="email1"
                />
              </div>

              <button type="submit" className="btn btn-primary w-100 fw-bold">
                Registrarme
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contacto;
