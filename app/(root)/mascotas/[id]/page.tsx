import {
  CitasPendientes,
  Historia,
  Mascotas,
  Veterinario,
} from "@/app/interfaces/interfaces";
import React from "react";
import { fetchCitasMascota, fetchHistoriaMascota, fetchMascota, fetchVeterinarios } from "@/app/services/fetchData";
import AddCita from "../../components/Add/AddCita";
import ChangeHistoria from "../../components/Add/ChangeHistoria";

const getMascota = async (id: Number): Promise<Mascotas> => {

  return fetchMascota(id);
};

const getCitas = async (id: Number): Promise<CitasPendientes[]> => {

  return fetchCitasMascota(id);
};

const getHistoria = async (id: Number): Promise<Historia[]> => {

  return fetchHistoriaMascota(id);
};
const getVeterinarios = async():Promise<Veterinario[]> => {
  return fetchVeterinarios();
};
async function perfilMascota({ params }: { params: { id: Number } }) {
  const mascota = await getMascota(params.id);
  const citas = await getCitas(params.id);
  const historias = await getHistoria(params.id);
  const veterinarios = await getVeterinarios();
  return (
    <>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-primary">
            Perfil de Mascota
          </h5>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-3 pl-5">
              <img
                className="rounded-circle"
                src="https://source.unsplash.com/Mv9hjnEUHR4/180x180"
                alt="..."
              />
            </div>
            <div className="col-9">
              <div className="input-group mb-3 col-9">
                <span
                  className="input-group-text"
                  id="inputGroup-sizing-default"
                >
                  Nombre
                </span>
                <input
                  type="text"
                  className="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default"
                  placeholder={`${mascota.idMascotas} - ${mascota.nombre}`}
                  readOnly
                />
              </div>

              <div className="input-group mb-3 col-9">
                <span
                  className="input-group-text"
                  id="inputGroup-sizing-default"
                >
                  Nacimiento
                </span>
                <input
                  type="text"
                  className="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default"
                  placeholder={`${mascota.fechaDeNacimiento} (${
                    new Date(Date.now()).getFullYear() -
                    new Date(mascota.fechaDeNacimiento).getFullYear()
                  })`}
                  readOnly
                />
              </div>
              <div className="input-group mb-3 col-9">
                <span
                  className="input-group-text"
                  id="inputGroup-sizing-default"
                >
                  Sexo
                </span>
                <input
                  type="text"
                  className="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default"
                  placeholder={`${mascota.sexo}`}
                  readOnly
                />
              </div>
              <div className="input-group mb-3 col-9">
                <span
                  className="input-group-text"
                  id="inputGroup-sizing-default"
                >
                  Tipo
                </span>
                <input
                  type="text"
                  className="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default"
                  placeholder={`${mascota.tipo}`}
                  readOnly
                />
              </div>
              <div className="input-group mb-3 col-9">
                <span
                  className="input-group-text"
                  id="inputGroup-sizing-default"
                >
                  Dueño
                </span>
                <input
                  type="text"
                  className="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default"
                  placeholder={`${mascota.dueno.dni.toString()} - ${
                    mascota.dueno.nombre
                  } ${mascota.dueno.apellido}`}
                  readOnly
                />
              </div>
              <div className="input-group mb-3 col-9">
                <span
                  className="input-group-text"
                  id="inputGroup-sizing-default"
                >
                  Contacto
                </span>
                <input
                  type="text"
                  className="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default"
                  placeholder={`${mascota.dueno.telefono}`}
                  readOnly
                />
              </div>
              <a
                className="btn btn-primary ml-3"
                href={`/perfil/${mascota.dueno.dni}`}
                role="button"
              >
                Ir al dueño
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* SECCION CITAS PENDIENTES */}

      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <div className="row justify-content-between">
            <div className="col-3">
              <h5 className="m-0 font-weight-bold text-primary">
                Citas de {mascota.nombre}
              </h5>
            </div>
            <div className="col-3">

                <AddCita mascota={mascota} datos={veterinarios}></AddCita>

            </div>
          </div>
        </div>
        <table className="table table-bordered" id="dataTable" width="100%">
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Consultorio</th>
              <th>Veterinario</th>
              <th>Opciones</th>
            </tr>
          </thead>

          <tbody>
            {citas.map((cita) => (
              <tr key={cita.idCita.toString()}>
                <td>{new Date(cita.fecha).toLocaleDateString()}</td>
                <td>{cita.consultorio}</td>
                <td>
                  {cita.veterinario.nombre} {cita.veterinario.apellido}
                </td>
                <td>
                  <ChangeHistoria cita={cita}/>
                  <i className="fas fa-solid fa-trash pr-2"></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* HISTORIA CLINICA */}
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-primary">Historia</h5>
        </div>
        {historias.map((historia, index) => (
          <div key={historia.idCita.toString()} className="card my-2">
            <div className="card-header">
              <span className="fw-bold">
                {index + 1} - {historia.veterinario.matricula} -{" "}
                {historia.veterinario.nombre} {historia.veterinario.apellido}
              </span>
            </div>
            <div className="card-body">
              <h5>Consultorio: {historia.consultorio}</h5>
              <h5 className="card-title fw-bold">{historia.titulo}</h5>
              <p className="card-text">{historia.descripcion}</p>
            </div>
          </div>
        ))}
      </div>

    </>
  );
}

export default perfilMascota;
