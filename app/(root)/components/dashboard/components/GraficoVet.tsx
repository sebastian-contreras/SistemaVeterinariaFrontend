"use client";

import { GananciaVet, GananciaVetArray } from "@/app/services/dashboardFetch";
import Chart from "react-google-charts";

function GraficoVet({datos}:{datos:GananciaVetArray}) {
    const {GananciaAnuales,GananciaMensuales} = datos;
    const paresGananciaAnuales: [String, Number][] = [];
    GananciaAnuales.forEach((ganancia) => {
        const nombre = `${ganancia.veterinario_dni} - ${ganancia.nombre} ${ganancia.apellido}`
        const dinero = ganancia.total
        paresGananciaAnuales.push([nombre, dinero]);
      });
      const dataGananciaAnuales = [["Veterinario", "Dinero Total"], ...paresGananciaAnuales];

      const parescitasAnuales: [String, Number][] = [];
      GananciaAnuales.forEach((ganancia) => {
          const nombre = `${ganancia.veterinario_dni} - ${ganancia.nombre} ${ganancia.apellido}`
          const dinero = ganancia.citas
          parescitasAnuales.push([nombre, dinero]);
        });
        const dataCitasAnuales = [["Veterinario", "Citas Total"], ...parescitasAnuales];
  

  const options = {
    title: "Recaudacion de veterinarios total",
    chartArea: { width: "50%" },
    hAxis: {
      title: "Recaudado",
      minValue: 0,
    },

    vAxis: {
      title: "Veterinario",
    },
  };


  const optionsCitas = {
    title: "Cantidad de citas anuales",
    chartArea: { width: "50%" },
    hAxis: {
      title: "Citas",
      minValue: 0,
    },

    vAxis: {
      title: "Veterinario",
    },
  }; 
  return (
    <div className="row">
      <div className="col-xl-6">
        <Chart
          chartType="BarChart"
          width="100%"
          height="400px"
          data={dataGananciaAnuales}
          options={options}
        />
      </div>
      <div className="col-xl-6">
        <Chart
          chartType="BarChart"
          width="100%"
          height="400px"
          data={dataCitasAnuales}
          options={optionsCitas}
        />
      </div>
    </div>
  );
}

export default GraficoVet;
