import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/_models/Cliente';
import { Comune } from 'src/app/_models/Comune';
import { Provincia } from 'src/app/_models/Provincia';
import { ClientiService } from 'src/app/_services/clienti.service';
import { DettagliClienteService } from 'src/app/_services/dettagli-cliente.service';
import { ComuniProvinceService } from 'src/app/_services/comuni-province.service';



@Component({
  selector: 'app-modifica-clienti',
  templateUrl: './modifica-clienti.component.html',
  styleUrls: ['./modifica-clienti.component.scss'],
})


export class ModificaClientiComponent implements OnInit {
  constructor(
    private dettClienteSrv: DettagliClienteService,
    private comProvSrv: ComuniProvinceService,
    private router: Router,
    private route: ActivatedRoute,
    private clientSrv: ClientiService
  ) {}

  tipiClienti: any;
  comuni: Comune[];
  province: Provincia[];
  response: any;
  idCliente: any;
  cliente: Cliente;

  newCliente: Cliente = new Cliente();

  ngOnInit(): void {
    this.dettClienteSrv.getTipiCliente().subscribe((c) => {
      this.tipiClienti = c;
    });
    this.comProvSrv.getAllProvince(0).subscribe((c) => {
      console.log(c);
      this.response = c;
      this.province = this.response.content;
    });
    this.comProvSrv.getAllComuni(0).subscribe((c) => {
      this.response = c;
      this.comuni = this.response.content;
    });
    this.route.params.subscribe((params) => {
      this.idCliente = +params['id'];
    });
    this.clientSrv.getById(this.idCliente).subscribe((c) => {
      this.response = c;
      this.cliente = this.response;
      console.log(this.cliente);
      this.newCliente = this.cliente;
    });
  }

  modificaCliente(newCliente: Cliente) {
    this.clientSrv.modifica(newCliente).subscribe((res) => {
      console.log(res);
      this.router.navigate(['/clienti']);
    });
  }
}
