import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiBaseUrl = 'api/users';

  constructor(
    private http: HttpClient,
    private userService: UserService
  ) { }

  login(username: string, password: string): Observable<any> {
    const user = {username: username, password: password};
    return this.http.post<any>(`${this.apiBaseUrl}/login`, user)
  }

  saveStorage(res: any){
    const user = {
      username: res.username,
      email: res.email,
      password: res.password
    }

    this.userService.userRole.next(res.role);
    localStorage.setItem('user', JSON.stringify(user));
  }

  isLogged(): boolean {
    return JSON.parse(localStorage.getItem('user')) !== null;
  }

  logOut(): void {
    localStorage.removeItem('user');
    this.userService.userRole.next('');
  }

}
