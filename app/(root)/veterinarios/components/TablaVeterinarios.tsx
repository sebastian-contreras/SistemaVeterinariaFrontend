import { Veterinario } from '@/app/interfaces/interfaces'
import Link from 'next/link'
function TablaVeterinarios({veterinarios}:{veterinarios:Veterinario[]}) {
  return (
    <table className="table table-bordered" id="dataTable" width="100%">
              <thead>
                <tr>
                <th>Dni</th>
                  <th>Nombre, apellido</th>
                  <th>Matricula</th>
                  <th>Telefono</th>
                  <th>email</th>
                  <th>direccion</th>
                  <th>Options</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>Dni</th>
                  <th>Nombre, apellido</th>
                  <th>Matricula</th>
                  <th>Telefono</th>
                  <th>email</th>
                  <th>direccion</th>
                  <th>Options</th>
                </tr>
              </tfoot>
              <tbody>
                {veterinarios.map((veterinario)=>(
                <tr key={veterinario.dni.toString()}>
                  <td>{veterinario.dni}</td>
                  <td>{veterinario.nombre}, {veterinario.apellido}</td>
                  <td>{veterinario.matricula}</td>
                  <td>{veterinario.telefono}</td>
                  <td>{veterinario.email}</td>
                  <td>{veterinario.direccion}</td>
                  <td>
                    <Link href={`/perfil/${veterinario.dni}`}><i className="fas fa-solid fa-id-badge pr-2"></i></Link>
                    <i className="fas fa-solid fa-trash pr-2"></i>
                    <i className="fas fa-solid fa-plus"></i>
                  </td>
                </tr>
                ))}
              </tbody>
            </table>
  )
}

export default TablaVeterinarios