import { CitasPendientes, Historia, Mascotas, Persona, Veterinario } from "../interfaces/interfaces";

const apiUrl = process.env.API_URL

// PERFIL DE MASCOTA
export const fetchMascota = async (id: Number): Promise<Mascotas> => {
    const data = await fetch(`${apiUrl}/api/mascotas/perfil/${id}`, {
      cache: "no-cache",
    });
    const mascota = data.json();
    return mascota;
  };
//   CITAS DE UNA MASCOTAS
  export const fetchCitasMascota = async (id: Number): Promise<CitasPendientes[]> => {
    const data = await fetch(`${apiUrl}/api/citasmascota/${id}`);
    const citas = data.json();
    return citas;
  };
//   HISTORIAS DE UNA MASCOTA
  export const fetchHistoriaMascota = async (id: Number): Promise<Historia[]> => {
    const data = await fetch(`${apiUrl}/api/historia/${id}`);
    const historia = data.json();
    return historia;
  };

//   TODAS LAS CITAS
  export const fetchCitasPendientes = async():Promise<CitasPendientes[]> => {
    const data = await fetch(`${apiUrl}/api/citaspendiente`,{cache:"no-cache"});
    const citas= data.json();
    return citas;
  };

// TODOS LOS CLIENTES
  export const fetchAllClientes = async (): Promise<Persona[]> => {
    const data = await fetch(`${apiUrl}/api/clientes`, {
      cache: "no-cache",
    });
    const clientes = data.json();
    return clientes;
  };

//   TODAS LAS MASCOTAS
  export const fetchMascotas = async (): Promise<Mascotas[]> => {
    const data = await fetch(`${apiUrl}/api/mascotas`, {
      cache: "no-cache",
    });
  
    const mascotas = data.json();
    return mascotas;
  };

// PERFIL DE PERSONA
  export const fetchPerfilCliente = async (dni: String): Promise<Persona> => {
    const data = await fetch(`${apiUrl}/api/clientes/${dni}`, {
      cache: "no-cache",
    });
    const clientes = data.json();
    return clientes;
  };

//MASCOTAS DE UNA PERSONA
  export const fetchMascotasPersona = async (dni: String): Promise<Mascotas[]> => {
    const data = await fetch(`${apiUrl}/api/mascotas/${dni}`, {
      cache: "no-cache",
    });
    const mascotas = data.json();
    return mascotas;
  };
  //CITAS DE UNA PERSONA
  export const fetchCitasPersona = async (dni: String): Promise<CitasPendientes[]> => {
    const data = await fetch(`${apiUrl}/api/citaspendiente/${dni}`, {
      cache: "no-cache",
    });
    const citas = data.json();
    return citas;
  };


  //
  export const fetchVeterinarios = async():Promise<Veterinario[]> => {
    const data = await fetch(`${apiUrl}/api/veterinarios`, {
      cache: "no-cache",
    });
    const veterinarios = data.json();
    console.log(data)
    return veterinarios;
  };