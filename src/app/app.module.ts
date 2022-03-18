import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MyHttpInterceptor } from './_interceptors/my-http.interceptor';


import { NavbarComponent } from './components/navbar/navbar.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ListaClientiComponent } from './components/clienti/lista-clienti/lista-clienti.component';
import { DettaglioClientiComponent } from './components/clienti/dettaglio-clienti/dettaglio-clienti.component';
import { DettaglioFattureComponent } from './components/fatture/dettaglio-fatture/dettaglio-fatture.component';
import { ModificaClientiComponent } from './components/clienti/modifica-clienti/modifica-clienti.component';
import { ListaFattureComponent } from './components/fatture/lista-fatture/lista-fatture.component';
import { ListaComponent } from './components/user/lista/lista/lista.component';
import { NuovaFatturaComponent } from './components/fatture/nuova-fattura/nuova-fattura.component';
import { FattureClientiComponent } from './components/clienti/fatture-clienti/fatture-clienti.component';



@NgModule({
  declarations: [
    AppComponent,
    ListaClientiComponent,
    DettaglioClientiComponent,
    DettaglioFattureComponent,
    LoginComponent,
    SignupComponent,
    ListaComponent,
    HomepageComponent,
    NavbarComponent,
    ListaFattureComponent,
    ModificaClientiComponent,
    NuovaFatturaComponent,
    FattureClientiComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],

  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MyHttpInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}


