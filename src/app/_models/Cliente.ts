import { Sede } from './sede';

export class Cliente {
  email!: string;
  id!: number;
  partitaIva!: string;
  ragioneSociale!: string;
  tipoCliente!: string;
  pec!: string;
  telefono!: string;
  nomeContatto!: string;
  cognomeContatto!: string;
  telefonoContatto!: string;
  emailContatto!: string;

  indirizzoSedeOperativa: Sede = new Sede();
  indirizzoSedeLegale: Sede = new Sede();
}
