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
import CabeceraMascota from "./components/CabeceraMascota";
import TablaCitasPendientesShort from "./components/TablaCitasPendientesShort";
import SeccionHistoria from "./components/SeccionHistoria";

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
      <CabeceraMascota mascota={mascota}/>
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
        <TablaCitasPendientesShort citas={citas}/>
      </div>
      {/* HISTORIA CLINICA */}
      <SeccionHistoria historias={historias}/>

    </>
  );
}

export default perfilMascota;
