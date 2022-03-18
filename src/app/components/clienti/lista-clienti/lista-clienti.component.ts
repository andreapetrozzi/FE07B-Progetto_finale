import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Cliente } from 'src/app/_models/Cliente';
import { ClientiService } from 'src/app/_services/clienti.service';




@Component({
  selector: 'app-lista-clienti',
  templateUrl: './lista-clienti.component.html',
  styleUrls: ['./lista-clienti.component.scss'],
})
export class ListaClientiComponent implements OnInit {

  constructor(
    private clientiSrv: ClientiService,
    private router: Router,
    private modalService: NgbModal
  ) {}

  closeResult = '';
  clienti!: Cliente[];
  numP: any;
  response: any;
  idCliente: number;
  pagCorr: number = 0;

  ngOnInit(): void {
    this.clientiSrv.getAll(0).subscribe((c) => {
      this.response = c;
      this.clienti = this.response.content;

      const numP = Array(this.response.totalPages);
      this.numP = numP;
    });
  }

  cambiaPag(page: number) {
    this.clientiSrv.getAll(page).subscribe((c) => {
      console.log(page);
      this.response = c;
      this.clienti = this.response.content;
      this.pagCorr = page;

    });
  }

  async eliminaCliente(idCliente: number, i: number) {
    this.idCliente = idCliente;
    let id = this.pagCorr * 20 + this.idCliente;
    console.log(id);

    await this.clientiSrv.deleteFatture(idCliente).toPromise();
    this.clientiSrv.delete(idCliente).subscribe((c) => {
      console.log(c);
      this.router.navigate(['/clienti']);
      this.clienti.splice(i, 1);
    });
  }




}
