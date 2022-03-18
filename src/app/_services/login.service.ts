import { Injectable } from '@angular/core';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { loginUtente } from '../_models/loginUtente';
import { environment } from 'src/environments/environment';
import { AdminLogin } from '../_models/AdminLogin';
import { User } from '../_models/user';


@Injectable({
  providedIn: 'root'
})

export class LoginService {
  myApiUrl:string = environment.pathApi;

  constructor(private http:HttpClient) { }

  login(data:loginUtente){
    try {
      console.log("Accesso effettuato");
      return this.http.post<User>(this.myApiUrl + '/api/auth/login',data );
    } catch (error) {
      return alert("Errore")
    }
  }

}
