import { Session } from "next-auth";
import ShortTableCitasPendientes from "../../perfil/[dni]/components/ShortTableCitasPendientes";
import { GananciaVet, fetchCitasVeterinario, fetchGananciaVet } from "@/app/services/dashboardFetch";
import { CitasPendientes } from "@/app/interfaces/interfaces";
import CardCount from "./components/CardCount";

async function Veterinario({ session }: { session: Session }) {
    const dni = session.user.dni;
    let citasVeterinario = await fetchCitasVeterinario(dni);
    let {GananciaAnuales,GananciaMensuales}: GananciaVet = await fetchGananciaVet(session.user.dni)
    if(GananciaAnuales.citas == undefined) {
      GananciaAnuales.citas=0 
      GananciaAnuales.total=0 
    }
    if(GananciaMensuales.citas == undefined){
      GananciaMensuales.total=0
      GananciaMensuales.citas=0
    } 
  return (
    <div>
      <h2 className="h5 mb-0 text-gray-900">Ganancias</h2>
      <hr />
      <div className="row">
        <div className="col-xl-3 col-md-6 mb-4">
          <CardCount title="Citas totales" number={GananciaAnuales.citas.toString() || "0"} icon="calendar" />
        </div>
        <div className="col-xl-3 col-md-6 mb-4">
          <CardCount title="Ganancia Total" number={`$${GananciaAnuales.total.toString() || "0"}`} color="success" icon="dollar-sign"/>
        </div>
        <div className="col-xl-3 col-md-6 mb-4">
        <CardCount title="Citas mensuales" number={GananciaMensuales.citas.toString() || "0"} icon="calendar" />
        </div>
        <div className="col-xl-3 col-md-6 mb-4">
        <CardCount title="Ganancia Mensual" number={`$${GananciaMensuales.total.toString() || "0"}`} color="success" icon="dollar-sign"/>
        </div>
      </div>
      
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <div className="row justify-content-between">
            <div className="col-6">
              <h5 className="m-0 font-weight-bold text-primary">
                Todas mis turnos pendientes:
              </h5>
            </div>
          </div>
        </div>
        <ShortTableCitasPendientes dashboard={true} citas={citasVeterinario} />
      </div>
    </div>
  );
}

export default Veterinario;
