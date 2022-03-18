import { Component, OnInit } from '@angular/core';
import { FatturaService } from 'src/app/_services/fatture.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';



@Component({
  selector: 'app-lista-fatture',
  templateUrl: './lista-fatture.component.html',
  styleUrls: ['./lista-fatture.component.scss'],
})
export class ListaFattureComponent implements OnInit {

  constructor(
    private fatturaSrv: FatturaService,
    private modalService: NgbModal
  ) {}

  fatture: any;
  response: any;
  pagCorr: number = 0;
  closeResult = '';

  ngOnInit(): void {
    this.fatturaSrv.getAll(0).subscribe((c) => {
      this.response = c;
      this.fatture = this.response.content;
    });
  }

  cambiaPag(page: number) {
    this.fatturaSrv.getAll(page).subscribe((c) => {
      console.log(page);
      this.response = c;
      this.fatture = this.response.content;
      this.pagCorr = page;
      console.log(this.pagCorr);
    });
  }

  elimina(id: number, i: number) {
    this.fatturaSrv.delete(id).subscribe(() => {
      this.fatture.splice(i, 1);
    });
  }

}
