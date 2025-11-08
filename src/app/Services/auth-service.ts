import { HttpClient } from '@angular/common/http';
import { inject, Inject, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthResponse, Login, Registro, Usuario } from '../Models/Auth.interface';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';
import { ToastService } from './toast.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private baseUrl = `${environment.apiUrl}`;

  private http = inject(HttpClient);
  private router = inject(Router);
  private toast = inject(ToastService);

  register(data: Registro): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.baseUrl}/auth/register`, data).pipe(
      tap(response => {
        this.saveToken(response.data.token);
        this.saveUser(response.data.user);
      })
    );
  }

  login(data: Login): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.baseUrl}/auth/login`, data).pipe(
      tap(response => {
        this.saveToken(response.data.token);
        this.saveUser(response.data.user);
      })
    );
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.toast.success('Sesión cerrada correctamente');
    this.router.navigate(['/auth']);
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  getUser(): Usuario | null {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }

  private saveToken(token: string): void {
    localStorage.setItem('token', token);
  }

  private saveUser(user: Usuario): void {
    localStorage.setItem('user', JSON.stringify(user));
  }

}
