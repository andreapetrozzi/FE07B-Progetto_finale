import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Cliente } from 'src/app/_models/Cliente';
import { Comune } from 'src/app/_models/Comune';
import { Provincia } from 'src/app/_models/Provincia';
import { ClientiService } from 'src/app/_services/clienti.service';
import { ComuniProvinceService } from 'src/app/_services/comuni-province.service';
import { DettagliClienteService } from 'src/app/_services/dettagli-cliente.service';



@Component({
  selector: 'app-dettaglio-clienti',
  templateUrl: './dettaglio-clienti.component.html',
  styleUrls: ['./dettaglio-clienti.component.scss'],
})
export class DettaglioClientiComponent implements OnInit {
  constructor(
    private dettClienteSrv: DettagliClienteService,
    private comProvSrv: ComuniProvinceService,
    private router: Router,
    private clientSrv: ClientiService
  ) {}

  tipiClienti: any;
  comuniSedeOperativa: Comune[];
  comuniSedeLegale: Comune[];
  provincia: Provincia[];
  response: any;
  idCliente: any;
  provincia1: string;
  provincia2: string;
  filterComuni: Comune[] = [];
  newCliente: Cliente = new Cliente();




  ngOnInit(): void {
    this.dettClienteSrv.getTipiCliente().subscribe((c) => {
      this.tipiClienti = c;
    });
    this.comProvSrv.getAllProvince(0).subscribe((c) => {
      console.log(c);
      this.provincia = (c as any).content;
    });
    this.comProvSrv.getAllComuni(0).subscribe((c) => {
      console.log('c', c);
      this.comuniSedeLegale = (c as any).content;
      this.comuniSedeOperativa = (c as any).content;
    });
  }
  onChangeProvinciaLegale(event: Provincia) {
    console.log(event);
    this.comProvSrv.getAllComuni(0).subscribe((c) => {
      this.comuniSedeLegale = ((c as any).content as any[]).filter(
        (comune) => comune.provincia.id === event.id
      );
    });
  }

  onChangeProvinciaOperativa(event: Provincia) {
    console.log(event);
    this.comProvSrv.getAllComuni(0).subscribe((c) => {
      this.comuniSedeOperativa = ((c as any).content as any[]).filter(
        (comune) => comune.provincia.id === event.id
      );
    });
  }

  addCliente(newCliente: Cliente) {
    console.log(newCliente);
    this.clientSrv.createCliente(newCliente).subscribe((res) => {
      console.log(res);
      this.router.navigate(['/clienti']);
    });
  }
}
