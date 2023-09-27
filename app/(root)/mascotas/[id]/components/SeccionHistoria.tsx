import { Historia } from '@/app/interfaces/interfaces'
import React from 'react'

function SeccionHistoria({historias}:{historias:Historia[]}) {
  return (
    <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-primary">Historia</h5>
        </div>
        {historias.map((historia, index) => (
          <div key={historia.idCita.toString()} className="card my-2">
            <div className="card-header">
              <span className="fw-bold">
                {index + 1} - {historia.veterinario.matricula} -{" "}
                {historia.veterinario.nombre} {historia.veterinario.apellido}
              </span>
            </div>
            <div className="card-body">
              <h5>Consultorio: {historia.consultorio}</h5>
              <h5 className="card-title fw-bold">{historia.titulo}</h5>
              <p className="card-text">{historia.descripcion}</p>
            </div>
          </div>
        ))}
      </div>
  )
}

export default SeccionHistoria