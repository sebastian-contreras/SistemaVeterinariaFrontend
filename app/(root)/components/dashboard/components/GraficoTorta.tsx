"use client";
import { SEXOMASCOTAS, TIPOMASCOTAS } from "@/app/enum/MASCOTAS";
import { estadistica } from "@/app/services/dashboardFetch";
import Chart from "react-google-charts";

function GraficoTorta({ estadistica }: { estadistica: estadistica }) {
  let { sexoMascota, cantidadClaseMascota, citasTipoMascotas } = estadistica;

  const paresSexoCantidad: [String, Number][] = [];
  sexoMascota.forEach((mascota) => {
    const cantidad = mascota.cantidad;
    const sexo = SEXOMASCOTAS[mascota.sexo];
    paresSexoCantidad.push([sexo, cantidad]);
  });
  const dataSexo = [["Sexo", "Cantidad"], ...paresSexoCantidad];

  const paresTipoMascotas: [String, Number][] = [];
  cantidadClaseMascota.forEach((mascota) => {
    const cantidad = mascota.cantidad;
    const tipo = TIPOMASCOTAS[mascota.tipo];
    paresTipoMascotas.push([tipo, cantidad]);
  });
  const dataTipo = [["Tipo", "Cantidad"], ...paresTipoMascotas];

  const paresCitaTipoMascotas: [String, Number][] = [];
  citasTipoMascotas.forEach((mascota) => {
    const cantidad = mascota.cantidad;
    const tipo = TIPOMASCOTAS[mascota.tipo];
    paresCitaTipoMascotas.push([tipo, cantidad]);
  });
  const dataCitaTipo = [["Tipo", "Cantidad"], ...paresCitaTipoMascotas];

  return (
    <>
      <div className="row">
        <div className="col-4">
          <Chart
            chartType="PieChart"
            data={dataSexo}
            options={{ title: "Sexo de Mascotas" }}
            width={"100%"}
            height={"400px"}
          />
        </div>
        <div className="col-4">
          <Chart
            chartType="PieChart"
            data={dataTipo}
            options={{ title: "Tipo de Mascotas" }}
            width={"100%"}
            height={"400px"}
          />
        </div>
        <div className="col-4">
          <Chart
            chartType="PieChart"
            data={dataCitaTipo}
            options={{ title: "Citas por tipo de mascotas" }}
            width={"100%"}
            height={"400px"}
          />
        </div>
      </div>
    </>
  );
}

export default GraficoTorta;
