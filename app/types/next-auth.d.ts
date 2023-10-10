import "next-auth";
import { ROL } from "../enum/ROL";


declare module "next-auth" {
 interface Session {
    user: {
      dni: string;
      username: string;
      nombre: string;
      apellido: string;
      token: string;
      rol: ROL;
    };
  }
}
