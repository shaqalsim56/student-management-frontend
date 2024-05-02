import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseUrl = 'http://localhost:9999/api/v1/students'; 

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/login`, { email, password })
      .pipe(
        catchError(error => {
          let errorMessage = 'An error occurred';
          if (error.error && error.error.message) {
            errorMessage = error.error.message;
          }
          return throwError({ message: errorMessage });
        })
      );
  }
}
