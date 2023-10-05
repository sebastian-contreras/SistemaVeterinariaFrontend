"use client"
import { Persona } from '@/app/interfaces/interfaces'
import { deletePersona } from '@/app/services/deleteData'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Router } from 'next/router'
import React from 'react'


function TablaClientes({clientes}:{clientes:Persona[]}) {
  const router = useRouter();
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
                    <th>Options</th>
                  </tr>
                </thead>
                <tfoot>
                  <tr>
                    <th>Dni</th>
                    <th>Nombre, apellido</th>
                    <th>Telefono</th>
                    <th>email</th>
                    <th>direccion</th>
                    <th>Options</th>
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
                      <td>
                        <Link
                          className="link-danger"
                          href={`/perfil/${cliente.dni}`}
                        >
                          <i className="fas fa-solid fa-id-badge pr-2"></i>
                        </Link>

                        <i className="fas fa-solid fa-trash pr-2" onClick={()=>deletePersonaTabla(cliente.dni)}></i>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
  )
}

export default TablaClientes