import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Fattura } from 'src/app/_models/Fattura';
import { ClientiService } from 'src/app/_services/clienti.service';
import { FatturaService } from 'src/app/_services/fatture.service';



@Component({
  selector: 'app-fatture-clienti',
  templateUrl: './fatture-clienti.component.html',
  styleUrls: ['./fatture-clienti.component.scss'],
})

export class FattureClientiComponent implements OnInit {

  constructor(
    private clienteSrv: ClientiService,
    private route: ActivatedRoute,
    private fatturaSrv: FatturaService,
    private modalService: NgbModal
  ) {}

  response: any;
  fatture: Fattura[];
  numP: any;
  id!: number;
  closeResult: any;

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = +params['id'];
      console.log(this.id);
      this.caricaDettagli(this.id);
    });
  }

  caricaDettagli(id: number) {
    this.clienteSrv.getFattureByCliente(id, 0).subscribe((c) => {
      this.response = c;
      this.fatture = this.response.content;
      const numP = Array(this.response.totalPages);
      this.numP = numP;
      console.log('this.fatture', this.fatture);
    });
  }

  cambiaPag(p: number) {
    this.clienteSrv.getFattureByCliente(this.id, p).subscribe((c) => {
      this.response = c;
      this.fatture = this.response.content;
    });
  }

  elimina(id: number, i: number) {
    this.fatturaSrv.delete(id).subscribe(() => {
      this.fatture.splice(i, 1);
    });
  }

  open(content) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }

  }
}
