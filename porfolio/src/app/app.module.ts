import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/elements/navbar/navbar.component';
import { LenguajesComponent } from './components/pages/lenguajes/lenguajes.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ContactaComponent } from './components/pages/contacta/contacta.component';
import { RouterModule } from '@angular/router';
import { ProyectoCardComponent } from './components/elements/proyecto-card/proyecto-card.component';
import { CardComponent } from './components/elements/card/card.component';
import { ProyectosComponent } from './components/pages/proyectos/proyectos.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LenguajesComponent,
    HomeComponent,
    ContactaComponent,
    ProyectoCardComponent,
    CardComponent,
    ProyectosComponent
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
