import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/_models/user';
import { AuthService } from 'src/app/_services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private authSrv: AuthService, private router: Router) {}

  item!: any;
  users!: User;
  isLogged: boolean;



  ngOnInit(): void {
    localStorage.getItem('utente');
    console.log(
      'localStorage.getItem("utente")',
      localStorage.getItem('utente')
    );
  }

  login(form: NgForm) {
    this.item = form.value;
    this.authSrv.login(this.item).subscribe(
      (res) => {
        this.users = res;
        localStorage.setItem('utente', JSON.stringify(this.users));
        this.router.navigate(['/lista']);
        localStorage.getItem('utente');
      },

      (err) => {
        switch (err.status) {
          case 400:
            alert('Inserire credenziali');
            break;
          case 401:
            alert('Credenziali errate');
        }
      }
    );
  }
}
