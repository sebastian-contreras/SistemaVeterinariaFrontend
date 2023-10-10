import { TopTen } from "@/app/services/dashboardFetch"
import Link from "next/link"

function TablaTop({veterinarios}:{veterinarios:TopTen[]}) {
  return (
    <table className="table table-bordered" id="dataTable" width="100%">
    <thead>
      <tr>
      <th>Posicion</th>
        <th>Dni</th>
        <th>Nombre, apellido</th>
        <th>Citas totales</th>
        <th>Recaudacion</th>
        <th>Opciones</th>
      </tr>
    </thead>
    <tfoot>
      <tr>
        <th>Posicion</th>
        <th>Dni</th>
        <th>Nombre, apellido</th>
        <th>Citas totales</th>
        <th>Recaudacion</th>
        <th>Opciones</th>
      </tr>
    </tfoot>
    <tbody>
      {veterinarios.map((veterinario,index)=>(
      <tr key={veterinario.dni.toString()}>
        <td>{index+1}</td>
        <td>{veterinario.dni}</td>
        <td>{veterinario.nombre}, {veterinario.apellido}</td>
        <td>{veterinario.cantidad.toString()}</td>
        <td>{veterinario.monto.toString()}</td>
        <td>
          <Link href={`/perfil/${veterinario.dni}`}><i className="fas fa-solid fa-id-badge pr-2"></i></Link>
        </td>
      </tr>
      ))}
    </tbody>
  </table>
  )
}

export default TablaTop