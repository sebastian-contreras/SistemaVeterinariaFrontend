import {
  CitasPendientes,
  Historia,
  Mascotas,
  Veterinario,
} from "@/app/interfaces/interfaces";
import {
  fetchCitasMascota,
  fetchHistoriaMascota,
  fetchMascota,
  fetchVeterinarios,
} from "@/app/services/fetchData";
import AddCita from "../../components/Add/AddCita";
import CabeceraMascota from "./components/CabeceraMascota";
import TablaCitasPendientesShort from "./components/TablaCitasPendientesShort";
import SeccionHistoria from "./components/SeccionHistoria";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { isAdmin } from "@/app/services/session";
import picAnimal from "@/public/img/one.jpg"
const getMascota = async (id: Number): Promise<Mascotas> => {
  return fetchMascota(id);
};

const getCitas = async (id: Number): Promise<CitasPendientes[]> => {
  return fetchCitasMascota(id);
};

const getHistoria = async (id: Number): Promise<Historia[]> => {
  return fetchHistoriaMascota(id);
};
const getVeterinarios = async (): Promise<Veterinario[]> => {
  return fetchVeterinarios();
};
async function perfilMascota({ params }: { params: { id: Number } }) {
  const session = await getServerSession(authOptions);
  const mascota = await getMascota(params.id);
  const citas = await getCitas(params.id);
  const historias = await getHistoria(params.id);
  const veterinarios = await getVeterinarios();
  let res = await fetch(`${mascota.urlFoto}`)
  if(!res.ok) mascota.urlFoto = picAnimal.src
  return (
    <>
      <CabeceraMascota mascota={mascota} />
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
              {isAdmin(session?.user.rol) ? (
                <AddCita mascota={mascota} datos={veterinarios}></AddCita>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <TablaCitasPendientesShort citas={citas} />
      </div>
      {/* HISTORIA CLINICA */}
      <SeccionHistoria historias={historias} />
    </>
  );
}

export default perfilMascota;
