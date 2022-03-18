import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FatturaService } from 'src/app/_services/fatture.service';
import { NgForm } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Cliente } from 'src/app/_models/Cliente';

import { Fattura } from 'src/app/_models/Fattura';
import { StatoFattura } from 'src/app/_models/StatoFattura';


@Component({
  selector: 'app-dettaglio-fatture',
  templateUrl: './dettaglio-fatture.component.html',
  styleUrls: ['./dettaglio-fatture.component.scss'],
})
export class DettaglioFattureComponent implements OnInit {
  fattura: any;
  response: any;
  cliente: Cliente;
  closeResult = '';

  constructor(
    private fatturaSrv: FatturaService,
    private route: ActivatedRoute,
    private router: Router,
    private modalService: NgbModal
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = +params['id'];
      this.caricaDettagli(id);

    });
  }

  caricaDettagli(id: number) {
    this.fatturaSrv.dettagli(id).subscribe((res) => {
      this.fattura = res;
      this.cliente = this.fattura.cliente;
    });
  }

  salva(form: NgForm) {
    this.fattura.stato.id = form.value.stato;
    this.fatturaSrv.modifica(this.fattura).subscribe((res) => {
      console.log(res);
      this.router.navigate(['/fatture']);
    });
  }

  elimina(id: number) {
    this.fatturaSrv.delete(id).subscribe(() => {
      this.router.navigate(['/fatture']);
    });
  }


}
