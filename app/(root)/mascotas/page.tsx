import { Mascotas } from "@/app/interfaces/interfaces";
import React from "react";
import MASCOTAS from "../../data/mascotas.json";
import Link from "next/link";
import { fetchMascotas } from "@/app/services/fetchData";
const getMascotas = async (): Promise<Mascotas[]> => {
  return fetchMascotas();
};
async function Mascotas() {
  const mascotasres = await getMascotas();

  return (
    <>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-primary">Mascotas</h5>
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

        </div>
        {/* <!-- DataTales Example --> */}
        <div className="card shadow mb-4">
          {/* <div className="card-body"> */}
          <div className="table-responsive">
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
                {mascotasres.map((mascota) => (
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
    </>
  );
}

export default Mascotas;
