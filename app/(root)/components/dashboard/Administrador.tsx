import { Session } from "next-auth";
import GraficoTorta from "./components/GraficoTorta";
import { GananciaVet, GananciaVetArray, fetchEstadistica, fetchGanancia, fetchGananciaVetAll,  } from "@/app/services/dashboardFetch";
import CardCount from "./components/CardCount";
import GraficoVet from "./components/GraficoVet";

async function Administrador({ session }: { session: Session }) {
  let estadisticas = await fetchEstadistica();
  let {GananciaAnuales,GananciaMensuales}: GananciaVet = await fetchGanancia()
  let gananciaCVet : GananciaVetArray = await fetchGananciaVetAll()
  
  console.log(gananciaCVet.GananciaMensuales)

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
            <h2 className="h5 mb-0 text-gray-900">Ganancias y Citas</h2>
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
      <GraficoVet datos={gananciaCVet}/>
      <hr/>

      <h2 className="h5 mb-0 text-gray-900">Estadisticas de Mascotas</h2>
      <hr />
      <GraficoTorta estadistica={estadisticas} />
    </div>
  );
}

export default Administrador;
