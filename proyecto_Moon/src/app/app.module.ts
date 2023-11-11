import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { BotonComponent } from './elementos/boton/boton.component';
import { RadiobuttonComponent } from './elementos/radiobutton/radiobutton.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    BotonComponent,
    RadiobuttonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
