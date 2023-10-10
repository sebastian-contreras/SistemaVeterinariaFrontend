"use client"
import ChangeHistoria from '@/app/(root)/components/Add/ChangeHistoria'
import { CitasPendientes } from '@/app/interfaces/interfaces'
import { deleteCitaPendiente } from '@/app/services/deleteData'
import { isAdmin } from '@/app/services/session'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
async function ShortTableCitasPendientes({citas,dashboard}:{citas:CitasPendientes[],dashboard?:boolean}) {
  const {data} = useSession()
  const router = useRouter()
  if (dashboard === undefined) {
    dashboard = false;
  }
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
              <th>Mascota</th>
             {dashboard ? <th>Dueño</th> : <th>Veterinario</th>}
              <th>Options</th>
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
                {dashboard?                <td>
                  {cita.mascota.dueno.nombre} {cita.mascota.dueno.apellido}
                </td> :                 <td>
                  {cita.veterinario.nombre} {cita.veterinario.apellido}
                </td>}

                
                <td>


                  <>
                   <ChangeHistoria cita={cita}/>
                   {dashboard ? <Link href={`/mascotas/${cita.mascota.idMascotas}`}>
                        <i className="fas fa-solid fa-paw pr-2"></i>
                      </Link> : ''}
                   
                                           <Link
                          className="link-danger"
                          href={`/perfil/${cita.mascota.dueno.dni}`}
                        >
                          <i className="fas fa-solid fa-id-badge pr-2"></i>
                        </Link>


                  {isAdmin(data?.user.rol)?
                  <a type='button' className="fas text-danger fa-solid fa-trash pr-2" onClick={()=>deleteCitaPendienteTabla(cita.idCita)}></a>
                  :""}
                  </>
                </td>
             
              </tr>
            ))}
          </tbody>
        </table>  )
}

export default ShortTableCitasPendientes