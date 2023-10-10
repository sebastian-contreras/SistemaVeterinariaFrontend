import { createPublicKey } from "crypto";
import { authOptions } from "../api/auth/[...nextauth]/route";
import {
  CitasPendientes,
  Historia,
  Mascotas,
  Persona,
  Veterinario,
} from "../interfaces/interfaces";
import { getServerSession } from "next-auth/next";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;



const getTokenSession = async (): Promise<string> => {
  const session = await getServerSession(authOptions);
  if (session) {
    return session.user.token as string;
  }
  throw new Error("No hay session");
};


// PERFIL DE MASCOTA
export const fetchMascota = async (id: Number): Promise<Mascotas> => {
  const token = await getTokenSession();
  const headers = { Authorization: `Bearer ${token}` };
  const data = await fetch(`${apiUrl}/api/mascotas/perfil/${id}`, {
    cache: "no-cache",
    headers,
  });
  const mascota = data.json();
  return mascota;
};
//   CITAS DE UNA MASCOTAS
export const fetchCitasMascota = async (
  id: Number
): Promise<CitasPendientes[]> => {
  const token = await getTokenSession();
  const headers = { Authorization: `Bearer ${token}` };
  const data = await fetch(`${apiUrl}/api/citasmascota/${id}`, {
    headers,
  });
  const citas = data.json();
  return citas;
};
//   HISTORIAS DE UNA MASCOTA
export const fetchHistoriaMascota = async (id: Number): Promise<Historia[]> => {
  const token = await getTokenSession();
  const headers = { Authorization: `Bearer ${token}` };

  const data = await fetch(`${apiUrl}/api/historia/${id}`, {
    headers,
  });
  const historia = data.json();
  return historia;
};

//   TODAS LAS CITAS
export const fetchCitasPendientes = async (): Promise<CitasPendientes[]> => {
  const token = await getTokenSession();
  const headers = { Authorization: `Bearer ${token}` };
  const data = await fetch(`${apiUrl}/api/citaspendiente`, {
    cache: "no-cache",
    headers,
  });
  const citas = data.json();
  return citas;
};

// TODOS LOS CLIENTES
//Paginacion
export const fetchAllClientes = async (page?:number): Promise<Persona[]> => {
  const token = await getTokenSession();
  const headers = { Authorization: `Bearer ${token}` };
  const data = await fetch(`${apiUrl}/api/clientes${page!==undefined ? `?page=${page}` : '' }`, {
    cache: "no-cache",
    headers,
  });
  const clientes = data.json();
  return clientes;
};


//   TODAS LAS MASCOTAS
export const fetchMascotas = async (page?:number): Promise<Mascotas[]> => {
  const token = await getTokenSession();
  const headers = { Authorization: `Bearer ${token}` };
  console.log(`${apiUrl}/api/mascotas${page != undefined ? `?page=${page}` : ''}`)
  const data = await fetch(`${apiUrl}/api/mascotas${page != undefined ? `?page=${page}` : ''}`, {
    cache: "no-cache",
    headers,
  });

  const mascotas = data.json();
  return mascotas;
};

// PERFIL DE PERSONA
export const fetchPerfilCliente = async (dni: String): Promise<Persona> => {
  const token = await getTokenSession();
  const headers = { Authorization: `Bearer ${token}` };
  const data = await fetch(`${apiUrl}/api/clientes/${dni}`, {
    cache: "no-cache",
    headers,
  });
  const clientes = data.json();
  return clientes;
};

//MASCOTAS DE UNA PERSONA
export const fetchMascotasPersona = async (
  dni: String
): Promise<Mascotas[]> => {
  const token = await getTokenSession();
  const headers = { Authorization: `Bearer ${token}` };
  const data = await fetch(`${apiUrl}/api/mascotas/${dni}`, {
    cache: "no-cache",
    headers,
  });
  const mascotas = data.json();
  return mascotas;
};
//CITAS DE UNA PERSONA
export const fetchCitasPersona = async (
  dni: String
): Promise<CitasPendientes[]> => {
  const token = await getTokenSession();
  const headers = { Authorization: `Bearer ${token}` };
  const data = await fetch(`${apiUrl}/api/citaspendiente/${dni}`, {
    cache: "no-cache",
    headers,
  });
  const citas = data.json();
  return citas;
};

//TRAER TODOS LOS VETERINARIOS
export const fetchVeterinarios = async (): Promise<Veterinario[]> => {
  const token = await getTokenSession();
  const headers = { Authorization: `Bearer ${token}` };
  const data = await fetch(`${apiUrl}/api/veterinarios`, {
    cache: "no-cache",
    headers,
  });
  const veterinarios = data.json();
  return veterinarios;
};

//TIENE CREDENCIAL UN VETERINARIO?
export const hasCredential = async (dni:string): Promise<boolean> => {
  const token = await getTokenSession();
  const headers = { Authorization: `Bearer ${token}` };
  const data = await fetch(`${apiUrl}/api/hascredential/${dni}`, {
    cache: "no-cache",
    headers,
  });
  if(!data.ok){
    return false
  }
  const hasCredential = data.json();
  return hasCredential;
};