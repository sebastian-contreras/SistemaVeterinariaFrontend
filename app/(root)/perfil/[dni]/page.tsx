import {
  CitasPendientes,
  Mascotas,
  Persona,
} from "@/app/interfaces/interfaces";
import React from "react";
import {
  fetchCitasPersona,
  fetchMascotasPersona,
  fetchPerfilCliente,
  hasCredential,
} from "@/app/services/fetchData";
import ShortTableMascotas from "./components/ShortTableMascotas";
import ShortTableCitasPendientes from "./components/ShortTableCitasPendientes";
import Cabecera from "./components/Cabecera";
import AddMascota from "../../components/Add/AddMascota";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { isAdmin } from "@/app/services/session";
import { ROL } from "@/app/enum/ROL";

const getClientes = async (dni: String): Promise<Persona> => {
  return await fetchPerfilCliente(dni);
};
const getMascotas = async (dni: String): Promise<Mascotas[]> => {
  return await fetchMascotasPersona(dni);
};
const getCitas = async (dni: String): Promise<CitasPendientes[]> => {
  return await fetchCitasPersona(dni);
};
const getHasCredential = async (dni:String) : Promise<boolean> => {
  return await hasCredential(dni.toString());
}
async function perfil({ params }: { params: { dni: String } }) {
  const session = await getServerSession(authOptions)
  const parametro = params.dni;
  const perfil = await getClientes(parametro);
  const mascotasres = await getMascotas(parametro);
  const citas = await getCitas(parametro);
  const tienenCred = await getHasCredential(parametro)
  return (
    // <div className="col-lg-12">
    <>
      {/* CABECERA PERFIL */}
      <Cabecera perfil={perfil} hasCredential={tienenCred}/>

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
              {isAdmin(session?.user.rol)?<AddMascota dueno={perfil}/>:""}
            </div>
          </div>
        </div>
        <ShortTableMascotas mascotas={mascotasres} />
      </div>
    </>
  );
}

export default perfil;
