import Modaljs from "@/app/components/Modaljs";
import { Persona } from "@/app/interfaces/interfaces";
import Link from "next/link";
import React from "react";
import FormMascota from "../components/FormMascota";
import FormPersona from "../components/FormPersona";
import { fetchAllClientes } from "@/app/services/fetchData";
const getClientes = async (): Promise<Persona[]> => {
  const data = await fetch("http://localhost:8080/api/clientes");
  const clientes = data.json();
  return fetchAllClientes();
};


async function Clientes() {
  const clientes = await getClientes();
  return (
    <>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-primary">Clientes</h5>
        </div>
        {/* <!-- Page Heading --> */}
        <div className="row my-3">
          <div className="col-md-6">
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                id="inputPassword"
                placeholder="Search"
              />
            </div>
          </div>
          <div className="col-md-6 ms-auto">
            <button data-target="#newCliente" data-toggle="modal" type="button" className="btn btn-primary ">
              Nuevo cliente
            </button>
          </div>
        </div>

        {/* <!-- DataTales Example --> */}
        <div id="card-body">
          <div className=" shadow mb-4">
            <div className="table-responsive">
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
                        <i className="fas fa-solid fa-trash pr-2"></i>
                        <i className="fas fa-solid fa-plus"></i>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <Modaljs titulo="Nuevo Cliente" objetivo="newCliente"><FormPersona tipo/></Modaljs>              

    </>
  );
}

export default Clientes;
