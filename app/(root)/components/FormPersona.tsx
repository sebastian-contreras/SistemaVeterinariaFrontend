import React from "react";

function FormPersona({ tipo }: { tipo: boolean }) {
  return (
    <form>

      <div className="mb-3 row">
        <label className="col-sm-2 col-form-label">Nombre</label>
        <div className="col-sm-10">
          <input type="text" className="form-control" />
        </div>
      </div>

      <div className="mb-3 row">
        <label className="col-sm-2 col-form-label">Apellido</label>
        <div className="col-sm-10">
          <input type="text" className="form-control" />
        </div>
      </div>

      <div className="mb-3 row">
        <label className="col-sm-2 col-form-label">Telefono</label>
        <div className="col-sm-10">
          <input type="text" className="form-control" />
        </div>
      </div>

      <div className="mb-3 row">
        <label className="col-sm-2 col-form-label">Direccion</label>
        <div className="col-sm-10">
          <input type="text" className="form-control" />
        </div>
      </div>

        {tipo ? (
          ""
        ) : (
          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label">Matricula</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" />
            </div>
          </div>
        )}

      <div className="mb-3 row">
        <label className="col-sm-2 col-form-label">Email</label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            placeholder="email@example.com"
          />
        </div>
      </div>
      <button type="submit" className="btn btn-primary mt-3">
        Guardar {tipo ? "cliente" : "veterinario"}
      </button>
    </form>
  );
}

export default FormPersona;
