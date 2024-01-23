import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/models/proyectos.model';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-proyecto-card',
  templateUrl: './proyecto-card.component.html',
  styleUrls: ['./proyecto-card.component.scss']
})
export class ProyectoCardComponent implements OnInit {
proyectos:Proyecto[]=[];
  constructor(private proyectosService:ProductosService) { }

  ngOnInit(): void {
    this.proyectosService.getProyectos()
    .subscribe({
      next:(proyecto:Proyecto[])=>{
        console.log(proyecto)
        this.proyectos= proyecto;
      },
      error:(e:any)=>{
        console.error(e)
      },
      complete:()=> {
        console.log('completado')
      },
    })
  }

}
