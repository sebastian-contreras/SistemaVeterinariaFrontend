import { CitaDtoPost } from "../(root)/components/postDto/CitaDtoPost";
import { MascotasDtoPost } from "../(root)/components/postDto/MascotaDtoPost";
import { PersonaDtoPost } from "../(root)/components/postDto/PersonaDtoPost";
const apiUrl = process.env.NEXT_PUBLIC_API_URL
 
export const postNuevaPersona = async (newPersona: PersonaDtoPost) => {
    const res = await fetch(`${apiUrl}/api/persona/save`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newPersona)
    })
  }
  export const postNuevaMascota = async (newMascota: MascotasDtoPost) => {
    const res = await fetch(`${apiUrl}/api/mascotas/save`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newMascota)
    })
  }
  export const postNuevoTurno = async (newCita: CitaDtoPost) => {
    const res = await fetch(`${apiUrl}/api/citas/save`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newCita)
    })
  }

  export const newHistoria = async (changeHistoria: CitaDtoPost,id:Number) => {
    const res = await fetch(`${apiUrl}/api/historia/createhistoria/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(changeHistoria)
    })
  }