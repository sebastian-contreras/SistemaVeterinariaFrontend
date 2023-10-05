import "next-auth";

enum Roles{
  "USUARIO", "EMPLEADO", "VETERINARIO", "ADMINISTRADOR"
}


declare module "next-auth" {
 interface Session {
    user: {
      dni: string;
      username: string;
      nombre: string;
      apellido: string;
      token: string;
      rol: Roles;
    };
  }
}
