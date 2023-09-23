import React from 'react'

function FormTurno() {
  return (
    <form>

    <div className="mb-3 row">
      <label className="col-sm-2 col-form-label">Fecha</label>
      <div className="col-sm-10">
        <input type="text" className="form-control" />
      </div>
    </div>
    
    <div className="mb-3 row">
      <label className="col-sm-2 col-form-label">Consulta</label>
      <div className="col-sm-10">
        <input type="text" className="form-control" />
      </div>
    </div>

    <div className="mb-3 row">
      <label className="col-sm-2 col-form-label">Veterinario</label>
      <div className="col-sm-10">
        <input type="text" className="form-control" />
      </div>
    </div>
    <div className="mb-3 row">
      <label className="col-sm-2 col-form-label">Monto</label>
      <div className="col-sm-10">
        <input type="text" className="form-control" />
      </div>
    </div>
    <button type="submit" className="btn btn-primary mt-3">
      Crear Turno
    </button>
  </form>
  )
}

export default FormTurno