// src/app/Models/UserProfile.interface.ts

export interface User {
  id_usuario: number;
  nombre: string;
  correo: string;
  roles: string;
  qr: string;
  created_at: string; // si quieres manejarlo como Date, puedes convertirlo después
}

export interface UserData {
  user: User;
}

export interface UserProfileResponse {
  success: boolean;
  data: UserData;
}
