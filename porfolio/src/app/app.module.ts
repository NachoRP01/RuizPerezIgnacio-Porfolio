import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BotonComponent } from './components/elements/boton/boton.component';
import { NavbarComponent } from './components/elements/navbar/navbar.component';
import { LenguajesComponent } from './components/pages/lenguajes/lenguajes.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ContactaComponent } from './components/pages/contacta/contacta.component';
import { RouterModule } from '@angular/router';
import { ProyectoCardComponent } from './components/elements/proyecto-card/proyecto-card.component';
@NgModule({
  declarations: [
    AppComponent,
    BotonComponent,
    NavbarComponent,
    LenguajesComponent,
    HomeComponent,
    ContactaComponent,
    ProyectoCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
