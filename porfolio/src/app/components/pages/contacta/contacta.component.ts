import { Component, OnInit } from '@angular/core';
import { Contacto } from 'src/app/models/contacto.model';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-contacta',
  templateUrl: './contacta.component.html',
  styleUrls: ['./contacta.component.scss']
})
export class ContactaComponent implements OnInit {
  contactoDatos: Contacto[]=[];

  constructor(private proyectosService:ProductosService) { }

  ngOnInit(): void {
    this.proyectosService.getContactos()
    .subscribe({
      next:(Contacto:any)=>{
        this.contactoDatos = Contacto;
        console
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
