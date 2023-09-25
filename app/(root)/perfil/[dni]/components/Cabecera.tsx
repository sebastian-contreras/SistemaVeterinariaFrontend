import { Persona } from '@/app/interfaces/interfaces'
import React from 'react'

function Cabecera({perfil}:{perfil:Persona}) {
  return (
<div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-primary">
            Perfil de {perfil.perfilRol.toLocaleLowerCase()}
          </h5>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-3 pl-5">
              <img
                className="rounded-circle"
                src="https://source.unsplash.com/Mv9hjnEUHR4/180x180"
                alt="..."
              />
            </div>
            <div className="col-9">
              <div className="input-group mb-3 col-9">
                <span
                  className="input-group-text"
                  id="inputGroup-sizing-default"
                >
                  Nombre
                </span>
                <input
                  type="text"
                  className="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default"
                  placeholder={`${perfil.nombre} ${perfil.apellido}`}
                  readOnly
                />
              </div>
              <div className="input-group mb-3 col-9">
                <span
                  className="input-group-text"
                  id="inputGroup-sizing-default"
                >
                  Documento
                </span>
                <input
                  type="text"
                  className="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default"
                  placeholder={`${perfil.dni}`}
                  readOnly
                />
              </div>
              <div className="input-group mb-3 col-9">
                <span
                  className="input-group-text"
                  id="inputGroup-sizing-default"
                >
                  Telefono
                </span>
                <input
                  type="text"
                  className="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default"
                  placeholder={`${perfil.telefono}`}
                  readOnly
                />
              </div>
              <div className="input-group mb-3 col-9">
                <span
                  className="input-group-text"
                  id="inputGroup-sizing-default"
                >
                  Email
                </span>
                <input
                  type="email"
                  className="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default"
                  placeholder={`${perfil.email}`}
                  readOnly
                />
              </div>
              <div className="input-group mb-3 col-9">
                <span
                  className="input-group-text"
                  id="inputGroup-sizing-default"
                >
                  Direccion
                </span>
                <input
                  type="email"
                  className="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default"
                  placeholder={`${perfil.direccion}`}
                  readOnly
                />
              </div>
              {perfil.perfilRol === "VETERINARIO" ? (
                <div className="input-group mb-3 col-9">
                  <span
                    className="input-group-text"
                    id="inputGroup-sizing-default"
                  >
                    Matricula
                  </span>
                  <input
                    type="email"
                    className="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default"
                    placeholder={`${perfil.matricula}`}
                    readOnly
                  />
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>  )
}

export default Cabecera