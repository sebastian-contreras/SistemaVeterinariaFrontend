const apiUrl = process.env.NEXT_PUBLIC_API_URL

export const deletePersona = async (id:String) =>{
    await fetch(`${apiUrl}/persona/${id}`, { method: 'DELETE' });
} 

export const deleteMascota = async (id:Number) =>{
    await fetch(`${apiUrl}/mascotas/${id}`, { method: 'DELETE' });
} 

export const deleteCitaPendiente = async (id:Number) =>{
    await fetch(`${apiUrl}/citaspendiente/${id}`, { method: 'DELETE' });
} 