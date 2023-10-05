import { getServerSession } from "next-auth";
import { CitaDtoPost } from "../(root)/components/postDto/CitaDtoPost";
import { MascotasDtoPost } from "../(root)/components/postDto/MascotaDtoPost";
import { PersonaDtoPost } from "../(root)/components/postDto/PersonaDtoPost";
import { authOptions } from "../api/auth/[...nextauth]/route";
const apiUrl = process.env.NEXT_PUBLIC_API_URL;
 const getTokenSession = async (): Promise<string> => {
  const session = await getServerSession(authOptions);
  if (session) {
    return session.user.token as string;
  }
  throw new Error("No hay session");
};

export const postNuevaPersona = async (newPersona: PersonaDtoPost) => {
  const token = await getTokenSession();
  const res = await fetch(`${apiUrl}/api/persona/save`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
    body: JSON.stringify(newPersona),
  });
};
export const postNuevaMascota = async (newMascota: MascotasDtoPost) => {
  const token = await getTokenSession();
  const res = await fetch(`${apiUrl}/api/mascotas/save`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
    body: JSON.stringify(newMascota),
  });
};
export const postNuevoTurno = async (newCita: CitaDtoPost) => {
  const token = await getTokenSession();
  const res = await fetch(`${apiUrl}/api/citas/save`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
    body: JSON.stringify(newCita),
  });
};

export const newHistoria = async (changeHistoria: CitaDtoPost, id: Number) => {
  const token = await getTokenSession();
  const res = await fetch(`${apiUrl}/api/historia/createhistoria/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
    body: JSON.stringify(changeHistoria),
  });
};
