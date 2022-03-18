import { AuthGuard } from './_guard/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ListaClientiComponent } from './components/clienti/lista-clienti/lista-clienti.component';
import { DettaglioClientiComponent } from './components/clienti/dettaglio-clienti/dettaglio-clienti.component';
import { ListaFattureComponent } from './components/fatture/lista-fatture/lista-fatture.component';
import { DettaglioFattureComponent } from './components/fatture/dettaglio-fatture/dettaglio-fatture.component';
import { ListaComponent } from './components/user/lista/lista/lista.component';
import { ModificaClientiComponent } from './components/clienti/modifica-clienti/modifica-clienti.component';
import { NuovaFatturaComponent } from './components/fatture/nuova-fattura/nuova-fattura.component';
import { FattureClientiComponent } from './components/clienti/fatture-clienti/fatture-clienti.component';



const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'clienti',
    component: ListaClientiComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'fatture',
    component: ListaFattureComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'lista',
    component: ListaComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'dettaglifattura/:id',
    component: DettaglioFattureComponent,
  },
  {
    path: 'dettagliCliente',
    component: DettaglioClientiComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'dettaglicliente/:id',
    component: DettaglioClientiComponent,
  },
  {
    path: 'nuovaFattura/:id',
    component: NuovaFatturaComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'nuovaFattura/:id',
    component: NuovaFatturaComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'modificaClienti/:id',
    component: ModificaClientiComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'fattureClienti/:id',
    component: FattureClientiComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
