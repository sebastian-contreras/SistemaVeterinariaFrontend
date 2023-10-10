"use client"
import { ROL } from '@/app/enum/ROL'
import { Persona } from '@/app/interfaces/interfaces'
import { deletePersona } from '@/app/services/deleteData'
import { isAdmin } from '@/app/services/session'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'


function TablaClientes({clientes}:{clientes:Persona[]}) {
  const router = useRouter();
  const {data} = useSession();

  const deletePersonaTabla = async (id:String) =>{
    await deletePersona(id);
    router.refresh()
  }
  return (
    <table
                className="table table-bordered"
                id="dataTable"
                width="100%"
              >
                <thead>
                  <tr>
                    <th>Dni</th>
                    <th>Nombre, apellido</th>
                    <th>Telefono</th>
                    <th>email</th>
                    <th>direccion</th>
                    {isAdmin(data?.user.rol)? <th>Options</th> : ""}
                  </tr>
                </thead>
                <tfoot>
                  <tr>
                    <th>Dni</th>
                    <th>Nombre, apellido</th>
                    <th>Telefono</th>
                    <th>email</th>
                    <th>direccion</th>
                    {isAdmin(data?.user.rol)? <th>Options</th> : ""}
                    
                  </tr>
                </tfoot>
                <tbody>
                  {clientes.map((cliente) => (
                    <tr key={cliente.dni.toString()}>
                      <td>{cliente.dni}</td>
                      <td>
                        {cliente.nombre}, {cliente.apellido}
                      </td>
                      <td>{cliente.telefono}</td>
                      <td>{cliente.email}</td>
                      <td>{cliente.direccion}</td>
                      {isAdmin(data?.user.rol)?
                      <td>
                        <Link
                          className="link-danger"
                          href={`/perfil/${cliente.dni}`}
                        >
                          <i className="fas fa-solid fa-id-badge pr-2"></i>
                        </Link>

                        <a type='button' className="fas fa-solid text-danger fa-trash pr-2" onClick={()=>deletePersonaTabla(cliente.dni)}></a>
                      </td>
                      :""}
                    </tr>
                  ))}
                </tbody>
              </table>
  )
}

export default TablaClientes