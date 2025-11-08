export interface Registro {
  nombre:     string;
  correo:     string;
  contrasena: string;
  roles:      string;
}

export type Login = Pick<Registro, "correo" | "contrasena">;


export interface Usuario {
  id_usuario: number;
  nombre: string;
  correo: string;
  roles: string;
  qr: string;
}

export interface AuthResponse {
  user: Usuario;
  token: string;
}
