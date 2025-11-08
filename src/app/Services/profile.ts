import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserProfileResponse } from '../Models/User.interface';

@Injectable({
  providedIn: 'root',
})
export class Profile {

  private baseUrl = `${environment.apiUrl}`;

  private http = inject(HttpClient);

  getProfile(): Observable<UserProfileResponse> {
    return this.http.get<UserProfileResponse>(`${this.baseUrl}/auth/profile`);
  }
}
