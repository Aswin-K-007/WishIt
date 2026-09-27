import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../enviromnet/enviromnet';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // private baseUrl = 'http://localhost:8080/wishIt/auth/register'; // Spring Boot base URL, DO not touch Fucking API.
  private baseUrl = environment.api.authService;

  constructor(private http: HttpClient) {}

  register(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, user);
  }
}
