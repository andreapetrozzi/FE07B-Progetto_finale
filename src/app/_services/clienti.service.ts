import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Cliente } from '../_models/Cliente';


@Injectable({
  providedIn: 'root',
})
export class ClientiService {
  pathApi: string = environment.pathApi;

  constructor(private http: HttpClient) {}

  getAll(p: number) {
    return this.http.get(
      `${environment.pathApi}/api/clienti?page=${p}&size=20&sort=id,ASC`
    );
  }

  getById(id: number) {
    return this.http.get(`${environment.pathApi}/api/clienti/${id}`);
  }


  getbyCliente(id: number) {
    return this.http.get<any>(
      this.pathApi +
        '/api/fatture/cliente/' +
        id +
        '?page=0&size=200&sort=id,ASC'
    );
  }

  deleteFatture(id: number) {
    return this.http.delete(`${environment.pathApi}/api/fatture/cliente/${id}`);
  }

  delete(id: number) {
    return this.http.delete(`${environment.pathApi}/api/clienti/${id}`);
  }

  createCliente(cliente: Cliente) {
    return this.http.post(`${environment.pathApi}/api/clienti`, cliente);
  }

  modifica(data: any) {
    return this.http.put(`${environment.pathApi}/api/clienti/${data.id}`, data);
  }

  getFattureByCliente(id: number, p: number) {
    return this.http.get(
      `${environment.pathApi}/api/fatture/cliente/${id}?page=${p}&size=20&sort=id,ASC`
    );
  }




}

