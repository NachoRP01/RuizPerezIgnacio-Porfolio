import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  cards: any;

  constructor(private proyectosService:ProductosService) { }

  ngOnInit() {
    this.proyectosService.getProyectos()
    .subscribe({
      next:(proyecto:any)=>{
        this.cards= proyecto.Card;
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
