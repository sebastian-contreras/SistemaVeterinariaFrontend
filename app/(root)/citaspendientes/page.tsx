import { CitasPendientes } from "@/app/interfaces/interfaces";
import React from "react";
const getCitas = async():Promise<CitasPendientes[]> => {
  const data = await fetch("http://localhost:8080/api/citaspendiente",{cache:"no-cache"});
  const citas= data.json();
  return citas;
};
async function Citas() {
  const citas = await getCitas();
  // console.log(citas[0])
  return (
    <>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-primary">Citas pendientes</h5>
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
          <div className="table-responsive">
            <table className="table table-bordered" id="dataTable" width="100%">
              <thead>
                <tr>
                <th>Id</th>
                  <th>Fecha</th>
                  <th>Consultorio</th>
                  <th>Monto</th>
                  <th>Mascota</th>
                  <th>Dueño</th>
                  <th>Veterinario</th>
                  <th>Opciones</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>Id</th>
                  <th>Fecha</th>
                  <th>Consultorio</th>
                  <th>Monto</th>
                  <th>Mascota</th>
                  <th>Dueño</th>
                  <th>Veterinario</th>
                  <th>Opciones</th>
                </tr>
              </tfoot>
              <tbody>
                {citas.map((cita)=>(
                <tr key={cita.idCita.toString()}>
                  <td>{cita.idCita.toString()}</td>
                  <td>{new Date(cita.fecha).toLocaleDateString()}</td>
                  <td>{cita.consultorio}</td>
                  <td>{cita.monto.toString()}</td>
                  <td>{cita.mascota.nombre} - {cita.mascota.tipo}</td>
                  <td>{cita.mascota.dueno.dni} - {cita.mascota.dueno.nombre} {cita.mascota.dueno.apellido}</td>
                  <td>{cita.veterinario.nombre} {cita.veterinario.apellido} - {cita.veterinario.matricula}</td>
                  <td>
                    <i className="fas fa-solid fa-id-badge pr-2"></i>
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

export default Citas;
