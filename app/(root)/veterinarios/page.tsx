import Modaljs from "@/app/components/Modaljs";
import { Veterinario } from "@/app/interfaces/interfaces";
import Link from "next/link";
import React from "react";
import FormPersona from "../components/FormPersona";
import { fetchVeterinarios } from "@/app/services/fetchData";

const getVeterinarios = async():Promise<Veterinario[]> => {
  return fetchVeterinarios();
};
async function Veterinarios() {
  const veterinarios = await getVeterinarios();
  return (
    <>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-primary">Veterinarios</h5>
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
            <button data-target="#newVeterinario" data-toggle="modal" type="button" className="btn btn-primary ">
              Nuevo Veterinario
            </button>
          </div>
        </div>
      {/* <!-- DataTales Example --> */}
      <div className="card shadow mb-4">
          <div className="table-responsive">
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
        </div>
      </div>
      </div>
      <Modaljs titulo="Nuevo veterinario" objetivo="newVeterinario"><FormPersona tipo={false}/></Modaljs>              

    </>
  );
}

export default Veterinarios;
