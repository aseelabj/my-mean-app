import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { User } from './user.model'; 

@Injectable({ providedIn: 'root' })
export class UserService {
  private apiUrl = 'http://localhost:3000/api/users/me'; 

  constructor(private http: HttpClient) {}

  getUser(): Observable<User> {
    return this.http.get<User>(this.apiUrl).pipe(
      catchError((error) => {
        console.error('Error fetching user data:', error);
        return throwError(() => new Error('Failed to fetch user data')); 
      })
    );
  }
}