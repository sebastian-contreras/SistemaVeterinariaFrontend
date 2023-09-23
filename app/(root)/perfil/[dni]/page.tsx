import {
  CitasPendientes,
  Mascotas,
  Persona,
} from "@/app/interfaces/interfaces";
import Link from "next/link";
import React from "react";
import NuevaMascota from "../../components/NuevaMascota";
import Modaljs from "@/app/components/Modaljs";
import FormMascota from "../../components/FormMascota";
import FormHistoria from "../../components/FormHistoria";
import { fetchCitasPersona, fetchMascotasPersona, fetchPerfilCliente } from "@/app/services/fetchData";

const getClientes = async (dni: String): Promise<Persona> => {
  return fetchPerfilCliente(dni);
};
const getMascotas = async (dni: String): Promise<Mascotas[]> => {
  return fetchMascotasPersona(dni);
};
const getCitas = async (dni: String): Promise<CitasPendientes[]> => {

  return fetchCitasPersona(dni);
};


async function perfil({ params }: { params: { dni: String} }) {
  const parametro = params.dni;
  const perfil = await getClientes(parametro);
  const mascotasres = await getMascotas(parametro);
  const citas = await getCitas(parametro);

  return (
    // <div className="col-lg-12">
    <>
      {/* CABECERA PERFIL */}
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-primary">
            Perfil de {perfil.perfilRol.toLocaleLowerCase()}
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
                  placeholder={`${perfil.nombre} ${perfil.apellido}`}
                  readOnly
                />
              </div>
              <div className="input-group mb-3 col-9">
                <span
                  className="input-group-text"
                  id="inputGroup-sizing-default"
                >
                  Documento
                </span>
                <input
                  type="text"
                  className="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default"
                  placeholder={`${perfil.dni}`}
                  readOnly
                />
              </div>
              <div className="input-group mb-3 col-9">
                <span
                  className="input-group-text"
                  id="inputGroup-sizing-default"
                >
                  Telefono
                </span>
                <input
                  type="text"
                  className="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default"
                  placeholder={`${perfil.telefono}`}
                  readOnly
                />
              </div>
              <div className="input-group mb-3 col-9">
                <span
                  className="input-group-text"
                  id="inputGroup-sizing-default"
                >
                  Email
                </span>
                <input
                  type="email"
                  className="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default"
                  placeholder={`${perfil.email}`}
                  readOnly
                />
              </div>
              <div className="input-group mb-3 col-9">
                <span
                  className="input-group-text"
                  id="inputGroup-sizing-default"
                >
                  Direccion
                </span>
                <input
                  type="email"
                  className="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default"
                  placeholder={`${perfil.direccion}`}
                  readOnly
                />
              </div>
              {perfil.perfilRol === "VETERINARIO" ? (
                <div className="input-group mb-3 col-9">
                  <span
                    className="input-group-text"
                    id="inputGroup-sizing-default"
                  >
                    Matricula
                  </span>
                  <input
                    type="email"
                    className="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default"
                    placeholder={`${perfil.matricula}`}
                    readOnly
                  />
                </div>
              ) : (
                ""
              )}
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
                Turnos de {perfil.nombre}
              </h5>
            </div>

          </div>
        </div>
        <table className="table table-bordered" id="dataTable" width="100%">
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Consultorio</th>
              <th>Mascota</th>
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
                  {cita.mascota.idMascotas} - {cita.mascota.nombre}
                </td>
                <td>
                  {cita.veterinario.nombre} {cita.veterinario.apellido}
                </td>
                <td>

                                 <a
                    data-target={`#modalhistoria${cita.idCita}`}
                    data-toggle="modal"
                    type="button"
                  >
                    <i className="fas fa-solid fa-check pr-2"></i>
                  </a>
                  <i className="fas fa-solid fa-trash pr-2"></i>
                </td>
                <Modaljs
                  titulo={`Historia ${cita.idCita}`}
                  objetivo={`modalhistoria${cita.idCita}`}
                >
                  <FormHistoria relleno={cita} />
                </Modaljs>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* SECCION MASCOTAS */}

      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <div className="row justify-content-between">
            <div className="col-3">
              <h5 className="m-0 font-weight-bold text-primary">
                Mascotas de {perfil.nombre}
              </h5>
            </div>
            <div className="col-3">
              <button data-target="#newMascota" data-toggle="modal" type="button" className="btn btn-primary btn-sm">
                Nueva Mascota
              </button>
            </div>
          </div>
        </div>
        <table className="table table-bordered" id="dataTable" width="50%">
          <thead>
            <tr>
              <th>idMascotas</th>
              <th>Nombre</th>
              <th>tipo</th>
              <th>sexo</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {mascotasres.map((mascota) => (
              <tr key={mascota.idMascotas}>
                <td>{mascota.idMascotas}</td>
                <td>{mascota.nombre}</td>
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
      <Modaljs titulo={`Nueva mascota de ${perfil.nombre}`} objetivo="newMascota"><FormMascota/></Modaljs>

    </>

  );
}

export default perfil;
