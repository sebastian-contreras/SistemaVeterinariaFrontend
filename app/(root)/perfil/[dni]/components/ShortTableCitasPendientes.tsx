import FormHistoria from '@/app/(root)/components/FormHistoria'
import Modaljs from '@/app/components/Modaljs'
import { CitasPendientes } from '@/app/interfaces/interfaces'
import React from 'react'

function ShortTableCitasPendientes({citas}:{citas:CitasPendientes[]}) {
  return (
<table className="table table-bordered" id="dataTable" width="100%">
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Consultorio</th>
              <th>Mascota</th>
              <th>Veterinario</th>
              <th>Opciones</th>
            </tr>
          </thead>

          <tbody>
            {citas.map((cita) => (
              <tr key={cita.idCita.toString()}>
                <td>{new Date(cita.fecha).toLocaleDateString()}</td>
                <td>{cita.consultorio}</td>
                <td>
                  {cita.mascota.idMascotas} - {cita.mascota.nombre}
                </td>
                <td>
                  {cita.veterinario.nombre} {cita.veterinario.apellido}
                </td>
                <td>

                                 <a
                    data-target={`#modalhistoria${cita.idCita}`}
                    data-toggle="modal"
                    type="button"
                  >
                    <i className="fas fa-solid fa-check pr-2"></i>
                  </a>
                  <i className="fas fa-solid fa-trash pr-2"></i>
                </td>
                <Modaljs
                  titulo={`Historia ${cita.idCita}`}
                  objetivo={`modalhistoria${cita.idCita}`}
                >
                  <FormHistoria relleno={cita} />
                </Modaljs>
              </tr>
            ))}
          </tbody>
        </table>  )
}

export default ShortTableCitasPendientes