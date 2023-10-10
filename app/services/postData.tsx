import { getServerSession } from "next-auth";
import { CitaDtoPost } from "../(root)/components/postDto/CitaDtoPost";
import { MascotasDtoPost } from "../(root)/components/postDto/MascotaDtoPost";
import { PersonaDtoPost } from "../(root)/components/postDto/PersonaDtoPost";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { getSession, useSession } from "next-auth/react";
import { Credencial } from "../interfaces/interfaces";
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

 const getTokenSession = async (): Promise<string> => {
  const session = await getSession();
  if (session) {
    return session.user.token as string;
  }
  throw new Error("No hay session");
};

export const postNuevaPersona = async (newPersona: PersonaDtoPost) => {
  const token = await getTokenSession();
  const headers = { Authorization: `Bearer ${token}`, "Content-Type":'application/json' }
    const res = await fetch(`${apiUrl}/api/persona/save`, {
    method: "POST",
    headers,
    body: JSON.stringify(newPersona),
  });
  return res;
};
export const postNuevaMascota = async (newMascota: MascotasDtoPost) => {
  const token = await getTokenSession();
  const headers = { Authorization: `Bearer ${token}`, "Content-Type":'application/json'}
    const res = await fetch(`${apiUrl}/api/mascotas/save`, {
    method: "POST",
    headers,
    body: JSON.stringify(newMascota),
  });
  return res;
};
export const postNuevoTurno = async (newCita: CitaDtoPost) => {
  const token = await getTokenSession();
  const headers = { Authorization: `Bearer ${token}`, "Content-Type":'application/json' }
    const res = await fetch(`${apiUrl}/api/citas/save`, {
    method: "POST",
    headers,
    body: JSON.stringify(newCita),
  });
  return res;

};

export const newHistoria = async (changeHistoria: CitaDtoPost, id: Number) => {
  const token = await getTokenSession();
  const headers = { Authorization: `Bearer ${token}`, "Content-Type":'application/json' }
    const res = await fetch(`${apiUrl}/api/historia/createhistoria/${id}`, {
    method: "PUT",
    headers,
    body: JSON.stringify(changeHistoria),
  });
  return res;

};


export const newCredencial = async (credencial:Credencial)=>{
  const token = await getTokenSession();
  const headers = {Authorization: `Bearer ${token}`,"Content-Type":'application/json'}
  const res = await fetch(`${apiUrl}/auth/register`,{
    method:"POST",
    headers,
    body:JSON.stringify(credencial)
  });
  return res;
}