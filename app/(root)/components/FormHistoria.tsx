import { CitasPendientes } from '@/app/interfaces/interfaces'
import React from 'react'

function FormHistoria( {relleno}:{relleno:CitasPendientes} ) {
  return (
<form>

<div className="mb-3 row">
  <label className="col-sm-3 ">Fecha</label>
  <div className="col-sm-9">
    <input type="text" className="form-control" placeholder={new Date(relleno.fecha).toLocaleDateString()} disabled/>
  </div>
</div>

<div className="mb-3 row">
  <label className="col-sm-3 col-form-label">Consulta</label>
  <div className="col-sm-9">
    <input type="text" className="form-control" placeholder={relleno.consultorio.toString()} disabled />
  </div>
</div>

<div className="mb-3 row">
  <label className="col-sm-3 col-form-label">Veterinario</label>
  <div className="col-sm-9">
    <input type="text" className="form-control" placeholder={relleno.veterinario.nombre.toString()} disabled/>
  </div>
</div>

<div className="mb-3 row">
  <label className="col-sm-3 col-form-label">Mascota</label>
  <div className="col-sm-9">
    <input type="text" className="form-control" placeholder={relleno.mascota.nombre.toString()} disabled/>
  </div>
</div>

<div className="mb-3 row">
  <label className="col-sm-3 col-form-label">Monto</label>
  <div className="col-sm-9">
    <input type="text" className="form-control" placeholder={relleno.monto.toString()} disabled/>
  </div>
</div>
<div className="mb-3 row">
  <label className="col-sm-3 col-form-label">Titulo</label>
  <div className="col-sm-9">
    <input type="text" className="form-control" />
  </div>
</div>
<div className="mb-3 row">
  <label className="col-sm-3 col-form-label">Descripcion</label>
  <div className="col-sm-9">
    <textarea  className="form-control" />
  </div>
</div>
<div className="mb-3">
        <label className="form-label">Imagenes</label>
        <input className="form-control" type="file" id="formFile" />
      </div>
<button type="submit" className="btn btn-primary mt-3">
  Crear Turno
</button>
</form>  )
}

export default FormHistoria