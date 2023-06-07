import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.model';

@Injectable()
export class UserService {
  private apiUrl = 'http://example.com/api/users';

  constructor(private http: HttpClient) {}

  createUser(user: User): Observable<void> {
    return this.http.post<void>(this.apiUrl, user);
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  updateUser(user: User): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${user.id}`, user);
  }

  deleteUser(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
