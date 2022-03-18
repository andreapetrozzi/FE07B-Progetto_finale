import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Cliente } from 'src/app/_models/Cliente';
import { ClientiService } from 'src/app/_services/clienti.service';
import { FatturaService } from 'src/app/_services/fatture.service';


@Component({
  selector: 'app-nuova-fattura',
  templateUrl: './nuova-fattura.component.html',
  styleUrls: ['./nuova-fattura.component.scss'],
})
export class NuovaFatturaComponent implements OnInit {

  constructor(
    private clientiSrv: ClientiService,
    private route: ActivatedRoute,
    private fattureSrv: FatturaService,
    private router: Router
  ) {}

  id: number;
  cliente: Cliente;
  response: any;
  nuovaFattura: any;

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = +params['id'];
      this.clientiSrv.getById(this.id).subscribe((res) => {
        this.response = res;
        console.log('this.response', this.response);
        this.cliente = this.response;
        console.log(this.cliente);
      });
    });
  }

  crea(form: any) {
    this.nuovaFattura = {
      id: 0,
      numero: 0,
      anno: 0,
      importo: 0,
      data: '',
      stato: { id: 0, nome: '' },
      cliente: {},
    };

    this.nuovaFattura.data = form.value.data;
    console.log('form.value.data', form.value.data);
    this.nuovaFattura.anno = this.nuovaFattura.data.slice(0, 4);
    this.nuovaFattura.importo = form.value.importo;
    this.nuovaFattura.numero = form.value.numFatt;
    console.log('form.value.numero', form.value.numero);
    this.nuovaFattura.stato.id = form.value.stato;
    this.nuovaFattura.cliente.id = this.cliente.id;
    this.fattureSrv.creaFattura(this.nuovaFattura).subscribe();
    this.router.navigate(['/clienti']);
  }
}
