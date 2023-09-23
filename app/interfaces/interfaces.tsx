export interface Persona {
  dni: String;
  nombre: String;
  apellido: String;
  telefono: String;
  email: String;
  matricula: String;
  direccion: String;
  perfilRol: String;
}
export interface Veterinario extends Persona {
  dni: String;
  nombre: String;
  apellido: String;
  telefono: String;
  email: String;
  matricula: String;
  direccion: String;
  perfilRol: String;
}
export interface Mascotas {
  idMascotas: number;
  nombre: String;
  fechaDeNacimiento: Date;
  tipo: String;
  urlFoto: String;
  sexo: String;
  dueno: Persona;
}
export interface CitasPendientes {
  idCita: Number;
  fecha: Date;
  consultorio: String;
  monto: Number;
  estado: Boolean;
  veterinario: Veterinario;
  mascota: Mascotas;
}
export interface Historia {
  idCita: Number;
  fecha: Date;
  consultorio: String;
  monto: Number;
  estado: Boolean;
  titulo: String;
  imagenes: String;
  descripcion: String;
  veterinario: Veterinario;
  mascota: Mascotas;
}
