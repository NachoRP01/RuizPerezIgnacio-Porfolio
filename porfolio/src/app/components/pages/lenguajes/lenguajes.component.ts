import { Component, OnInit } from '@angular/core';
import { Lenguajes } from 'src/app/models/lenguajes.model';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-lenguajes',
  templateUrl: './lenguajes.component.html',
  styleUrls: ['./lenguajes.component.scss']
})
export class LenguajesComponent implements OnInit {
  lenguajes: Lenguajes[]=[];

  constructor(private proyectosService:ProductosService) { }

  ngOnInit(): void {
    this.proyectosService.getLenguajes()
    .subscribe({
      next:(Lenguajes:any)=>{
        this.lenguajes= Lenguajes;
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
