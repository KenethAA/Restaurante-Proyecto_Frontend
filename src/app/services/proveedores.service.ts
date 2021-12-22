import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Proveedores, ProveedoresWithoutID } from '../models/proveedores';
import { environment } from 'src/environments/environment';

const API= environment.API;
const ENDPOINT = 'proveedores';

@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {

  constructor(
    private http: HttpClient
  ) { }
 //GET
  getAllProveedores(){
    return this.http.get<Proveedores[]>(`${API}/${ENDPOINT}`)
  }

  //POST
  postProveedores(proveedores:ProveedoresWithoutID){
    return this.http.post(`${API}/${ENDPOINT}`,proveedores);
  }

  //PUT
  putProveedores(id:string,proveedores:ProveedoresWithoutID){
    return this.http.put(`${API}/${ENDPOINT}/${id}`,proveedores)
  }

  //PATCH
  patchProveedores(id:string,proveedores:ProveedoresWithoutID){
    return this.http.patch(`${API}/${ENDPOINT}/${id}`,proveedores)
  }

  //DELETE
deleteProveedores(id:string){
    return this.http.delete(`${API}/${ENDPOINT}/${id}`)
  }
}
