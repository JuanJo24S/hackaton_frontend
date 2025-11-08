export interface Registro {
  nombre:     string;
  correo:     string;
  contrasena: string;
  roles:      string;
  ubicacion?: string;  // Solo para ARTESANO
  tags?:      string[]; // Solo para ARTESANO
}

export type Login = Pick<Registro, "correo" | "contrasena">;

export interface Usuario {
  id_usuario: number;
  nombre:     string;
  correo:     string;
  roles:      string;
  ubicacion:  string | null;
  tags:       string[] | null;
  qr:         string | null;
}

export interface AuthResponse {
  success: boolean;
  message: string;
  data: {
    user:  Usuario;
    token: string;
  };
}
