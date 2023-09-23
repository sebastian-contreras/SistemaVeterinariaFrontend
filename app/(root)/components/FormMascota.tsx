import React from "react";

function FormMascota() {
  return (
    <form>

      <div className="mb-3 row">
        <label className="col-sm-2 col-form-label">Nombre</label>
        <div className="col-sm-10">
          <input type="text" className="form-control" />
        </div>
      </div>
      
      <div className="mb-3 row">
        <label className="col-sm-2 col-form-label">Tipo</label>
        <div className="col-sm-10">
          <input type="text" className="form-control" />
        </div>
      </div>

      <div className="mb-3 row">
        <label className="col-sm-2 col-form-label">Sexo</label>
        <div className="col-sm-10">
          <input type="text" className="form-control" />
        </div>
      </div>
      <div className="mb-3">
        <label className="form-label">Foto principal</label>
        <input className="form-control" type="file" id="formFile" />
      </div>
      <button type="submit" className="btn btn-primary mt-3">
        Guardar Mascota
      </button>
    </form>
  );
}

export default FormMascota;
