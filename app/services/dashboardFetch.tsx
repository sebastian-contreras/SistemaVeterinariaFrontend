import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { CitasPendientes } from "../interfaces/interfaces";
import { SEXOMASCOTAS, TIPOMASCOTAS } from "../enum/MASCOTAS";
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const getTokenSession = async (): Promise<string> => {
  const session = await getServerSession(authOptions);
  if (session) {
    return session.user.token as string;
  }
  throw new Error("No hay session");
};
//CITAS DE UNA PERSONA
export const fetchCitasVeterinario = async (
  dni: String
): Promise<CitasPendientes[]> => {
  const token = await getTokenSession();
  const headers = { Authorization: `Bearer ${token}` };
  const data = await fetch(`${apiUrl}/api/citasveterinario/${dni}`, {
    cache: "no-cache",
    headers,
  });
  const citas = data.json();
  return citas;
};
export interface GananciaVet {
  GananciaAnuales: {
    veterinario_dni: string;
    nombre: string;
    apellido: string;
    total: Number;
    citas: Number;
  };
  GananciaMensuales: {
    veterinario_dni: string;
    nombre: string;
    apellido: string;
    total: Number;
    citas: Number;
  };
}
export interface GananciaVetArray {
  GananciaAnuales: {
    veterinario_dni: string;
    nombre: string;
    apellido: string;
    total: Number;
    citas: Number;
  }[];
  GananciaMensuales: {
    veterinario_dni: string;
    nombre: string;
    apellido: string;
    total: Number;
    citas: Number;
  }[];
}
export const fetchGananciaVet = async (dni?: String): Promise<GananciaVet> => {
  const token = await getTokenSession();
  const headers = { Authorization: `Bearer ${token}` };
  const data = await fetch(
    `${apiUrl}/api/estadistica/gananciavet${dni == undefined ? "" : `/${dni}`}`,
    {
      headers,
    }
  );
  const ganancia = data.json();
  return ganancia;
};
export const fetchGananciaVetAll = async (): Promise<GananciaVetArray> => {
  const token = await getTokenSession();
  const headers = { Authorization: `Bearer ${token}` };
  const data = await fetch(`${apiUrl}/api/estadistica/gananciavet`, {
    headers,
  });
  const ganancia = data.json();
  return ganancia;
};
export const fetchGanancia = async (): Promise<GananciaVet> => {
  const token = await getTokenSession();
  const headers = { Authorization: `Bearer ${token}` };
  const data = await fetch(`${apiUrl}/api/estadistica/ganancia`, {
    headers,
  });
  const ganancia = data.json();
  return ganancia;
};
export interface estadistica {
  citasTipoMascotas: {
    tipo: TIPOMASCOTAS;
    cantidad: Number;
  }[];
  cantidadClaseMascota: {
    tipo: TIPOMASCOTAS;
    cantidad: Number;
  }[];
  sexoMascota: {
    sexo: SEXOMASCOTAS;
    cantidad: Number;
  }[];
}

export const fetchEstadistica = async (): Promise<estadistica> => {
  const token = await getTokenSession();
  const headers = { Authorization: `Bearer ${token}` };
  const data = await fetch(`${apiUrl}/api/estadistica/mascota`, {
    headers,
  });
  const estadistica = data.json();
  return estadistica;
};
export interface TopTen {
  dni: String;
  nombre: String;
  apellido: String;
  cantidad: Number;
  monto: Number;
}
export const fetchTopTen = async (): Promise<TopTen[]> => {
  const token = await getTokenSession();
  const headers = { Authorization: `Bearer ${token}` };
  const data = await fetch(`${apiUrl}/api/estadistica/topvet`, {
    headers,
  });
  const topTen = data.json();
  return topTen;
};
