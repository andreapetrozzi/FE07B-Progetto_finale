import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import { User } from 'src/app/_models/user';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss'],
})
export class ListaComponent implements OnInit {

  constructor(private authSrv: AuthService) {}

  utenti!: Array<User>;
  response!: any;
  pagCorr: any;
  numP: any;

  ngOnInit() {
    this.authSrv.getAll(0).subscribe((c) => {
      this.response = c;
      console.log(this.response);
      this.utenti = this.response.content;
      const numP = Array(this.response.totalPages);
      this.numP = numP;
    });
  }

  cambiaPag(page: number) {
    this.authSrv.getAll(page).subscribe((c) => {
      console.log(page);
      this.response = c;
      this.utenti = this.response.content;
      this.pagCorr = page;
    });
  }



}
