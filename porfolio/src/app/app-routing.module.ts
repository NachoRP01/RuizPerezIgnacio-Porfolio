import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { LenguajesComponent } from './components/pages/lenguajes/lenguajes.component';
import { ContactaComponent } from './components/pages/contacta/contacta.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'lenguajes', component: LenguajesComponent },
  { path: 'contacto', component: ContactaComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
