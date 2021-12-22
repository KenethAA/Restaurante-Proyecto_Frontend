import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Inventario, InventarioWithoutID } from '../models/inventario';
import { environment } from 'src/environments/environment';

const API= environment.API;
const ENDPOINT = 'inventarios';

@Injectable({
  providedIn: 'root'
})
export class InventarioService {

  constructor(
    private http: HttpClient
  ) { }
 //GET
  getAllInventario(){
    return this.http.get<Inventario[]>(`${API}/${ENDPOINT}`)
  }

  //POST
  postInventario(inventario:InventarioWithoutID){
    return this.http.post(`${API}/${ENDPOINT}`,inventario);
  }

  //PUT
  putInventario(id:string,inventario:InventarioWithoutID){
    return this.http.put(`${API}/${ENDPOINT}/${id}`,inventario)
  }

  //PATCH
  patchInventario(id:string,inventario:InventarioWithoutID){
    return this.http.patch(`${API}/${ENDPOINT}/${id}`,inventario)
  }

  //DELETE
deleteInventario(id:string){
    return this.http.delete(`${API}/${ENDPOINT}/${id}`)
  }
}