import { Mascotas } from '@/app/interfaces/interfaces'
import { deleteMascota } from '@/app/services/deleteData'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
function TablaMascotas({mascotas}:{mascotas:Mascotas[]}) {
  const router = useRouter();
  const deleteMascotasTabla = async (id:Number) =>{
      await deleteMascota(id);
      router.refresh()
      
    }
  return (
    <table className="table table-bordered" id="dataTable" width="100%">
              <thead>
                <tr>
                  <th>idMascotas</th>
                  <th>Nombre</th>
                  <th>Dueño</th>
                  <th>Nacimiento</th>
                  <th>tipo</th>
                  <th>sexo</th>
                  <th>Options</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>idMascotas</th>
                  <th>Nombre</th>
                  <th>Dueño</th>
                  <th>Nacimiento</th>
                  <th>tipo</th>
                  <th>sexo</th>
                  <th>Options</th>
                </tr>
              </tfoot>
              <tbody>
                {mascotas.map((mascota) => (
                  <tr key={mascota.idMascotas}>
                    <td>{mascota.idMascotas}</td>
                    <td>{mascota.nombre}</td>
                    <td>
                      {mascota.dueno.dni} - {mascota.dueno.nombre}{" "}
                      {mascota.dueno.apellido}
                    </td>
                    <td>
                      {new Date(mascota.fechaDeNacimiento).toLocaleDateString()}
                    </td>
                    <td>{mascota.tipo}</td>
                    <td>{mascota.sexo}</td>
                    <td>
                      <Link href={`/mascotas/${mascota.idMascotas}`}>
                        <i className="fas fa-solid fa-paw pr-2"></i>
                      </Link>

                      <i className="fas fa-solid fa-trash pr-2" onClick={()=>deleteMascotasTabla(mascota.idMascotas)}></i>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
  )
}

export default TablaMascotas