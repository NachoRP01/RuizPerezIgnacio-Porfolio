import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-lenguajes',
  templateUrl: './lenguajes.component.html',
  styleUrls: ['./lenguajes.component.scss']
})
export class LenguajesComponent implements OnInit {
  lenguajes: any;

  constructor(private proyectosService:ProductosService) { }

  ngOnInit(): void {
    this.proyectosService.getProyectos()
    .subscribe({
      next:(proyecto:any)=>{
        this.lenguajes= proyecto.Lenguajes;
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
