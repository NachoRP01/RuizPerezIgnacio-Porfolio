import { Injectable } from '@angular/core';
import { apiServer } from '../components/apiServer';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  private ApiUrl: string = apiServer.serverUrl;
  constructor(private http: HttpClient) {}
  getProyectos() {
    return this.http.get(`${this.ApiUrl}`);
  }
}
