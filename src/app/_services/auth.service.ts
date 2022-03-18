import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { User } from '../_models/user';



@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}



  signup(item: any) {
    console.log(item);
    return this.http.post(`${environment.pathApi}/api/auth/signup`, item);
  }

  login(item: any) {
    return this.http.post<any>(`${environment.pathApi}/api/auth/login`, item);
  }

  getAll(p: number) {
    return this.http.get<any>(
      `${environment.pathApi}/api/users?page=${p}&size=20&sort=id,ASC`
    );
  }

  logout() {
    this.router.navigate(['/login']);
    localStorage.removeItem('utente');
  }




}
