import {
  CitasPendientes,
  Mascotas,
  Persona,
} from "@/app/interfaces/interfaces";
import Link from "next/link";
import React from "react";
import {
  fetchCitasPersona,
  fetchMascotasPersona,
  fetchPerfilCliente,
} from "@/app/services/fetchData";
import ShortTableMascotas from "./components/ShortTableMascotas";
import ShortTableCitasPendientes from "./components/ShortTableCitasPendientes";
import Cabecera from "./components/Cabecera";
import AddMascota from "../../components/Add/AddMascota";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

const getClientes = async (dni: String): Promise<Persona> => {
  return fetchPerfilCliente(dni);
};
const getMascotas = async (dni: String): Promise<Mascotas[]> => {
  return fetchMascotasPersona(dni);
};
const getCitas = async (dni: String): Promise<CitasPendientes[]> => {
  return fetchCitasPersona(dni);
};

async function perfil({ params }: { params: { dni: String } }) {
  const parametro = params.dni;
  const perfil = await getClientes(parametro);
  const mascotasres = await getMascotas(parametro);
  const citas = await getCitas(parametro);

  return (
    // <div className="col-lg-12">
    <>
      {/* CABECERA PERFIL */}
      <Cabecera perfil={perfil} />

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
        <ShortTableCitasPendientes citas={citas} />
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
              <AddMascota dueno={perfil} />
            </div>
          </div>
        </div>
        <ShortTableMascotas mascotas={mascotasres} />
      </div>
    </>
  );
}

export default perfil;
