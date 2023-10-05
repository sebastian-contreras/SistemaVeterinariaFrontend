import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

const apiUrl = process.env.NEXT_PUBLIC_API_URL
const getTokenSession = async (): Promise<string> => {
    const session = await getServerSession(authOptions);
    if (session) {
      return session.user.token as string;
    }
    throw new Error("No hay session");
  };

export const deletePersona = async (id:String) =>{
    const token = await getTokenSession();
  const headers = { Authorization: `Bearer ${token}` };


    await fetch(`${apiUrl}/api/persona/${id}`, { method: 'DELETE',headers});
} 

export const deleteMascota = async (id:Number) =>{
    const token = await getTokenSession();
    const headers = { Authorization: `Bearer ${token}` };

    await fetch(`${apiUrl}/api/mascotas/${id}`, { method: 'DELETE',headers});
} 

export const deleteCitaPendiente = async (id:Number) =>{
    const token = await getTokenSession();
    const headers = { Authorization: `Bearer ${token}` };

    await fetch(`${apiUrl}/api/citaspendiente/${id}`, { method: 'DELETE',headers});
} 