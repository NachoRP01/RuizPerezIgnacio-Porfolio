import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Proyecto } from '../models/proyectos.model';
import { Contacto } from '../models/contacto.model';
import { Lenguajes } from '../models/lenguajes.model';
import { Card } from '../models/card.model';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  constructor(private firestore: Firestore) {}

  getProyectos(): Observable<Proyecto[]> {
    const placeRef = collection(this.firestore, 'Proyectos');
    return collectionData(placeRef, { idField: 'id' }) as Observable<
      Proyecto[]
    >;
  }
  getContactos(): Observable<Contacto[]> {
    const placeRef = collection(this.firestore, 'Contacto');
    return collectionData(placeRef, { idField: 'id' }) as Observable<
      Contacto[]
    >;
  }
  getLenguajes(): Observable<Lenguajes[]> {
    const placeRef = collection(this.firestore, 'Lenguajes');
    return collectionData(placeRef, { idField: 'id' }) as Observable<
      Lenguajes[]
    >;
  }
  getTarjeta(): Observable<Card[]> {
    const placeRef = collection(this.firestore, 'Tarjetas');
    return collectionData(placeRef, { idField: 'id' }) as Observable<
      Card[]
    >;
  }
}
