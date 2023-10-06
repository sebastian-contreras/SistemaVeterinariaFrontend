"use client"
import ChangeHistoria from '@/app/(root)/components/Add/ChangeHistoria'
import { CitasPendientes } from '@/app/interfaces/interfaces'
import { deleteCitaPendiente } from '@/app/services/deleteData'
import { useRouter } from 'next/navigation'
function TablaCitasPendientesShort({citas}:{citas:CitasPendientes[]}) {
  const router = useRouter();
  const deleteCitaPendienteTabla = async (id:Number) =>{
    await deleteCitaPendiente(id);
    router.refresh()
  }
      
  return (
    <table className="table table-bordered" id="dataTable" width="100%">
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Consultorio</th>
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
                  {cita.veterinario.nombre} {cita.veterinario.apellido}
                </td>
                <td>
                  <ChangeHistoria cita={cita}/>
                  <i className="fas fa-solid fa-trash pr-2" onClick={()=>deleteCitaPendienteTabla(cita.idCita)}></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
  )
}

export default TablaCitasPendientesShort