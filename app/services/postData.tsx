import { PersonaDtoPost } from "../(root)/components/postDto/PersonaDtoPost";
const apiUrl = process.env.API_URL
 
export const postNuevaPersona = async (newPersona: PersonaDtoPost) => {
    const res = await fetch(`http://localhost:8080/api/persona/save`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newPersona)
    })
  }
  