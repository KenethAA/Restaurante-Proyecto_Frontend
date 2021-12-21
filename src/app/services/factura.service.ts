import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Factura, FacturaWithoutID } from '../models/factura';
import { environment } from 'src/environments/environment';

const API= environment.urlBackend;
const ENDPOINT = 'facturas';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {

  constructor(
    private http: HttpClient
  ) { }
 //GET
  getAllFactura(){
    return this.http.get<Factura[]>(`${API}/${ENDPOINT}`)
  }

  //POST
  postFactura(factura:FacturaWithoutID){
    return this.http.post(`${API}/${ENDPOINT}`,factura);
  }

  //PUT
  putFactura(id:string,factura:FacturaWithoutID){
    return this.http.put(`${API}/${ENDPOINT}/${id}`,factura)
  }

  //PATCH
  patchFactura(id:string,factura:FacturaWithoutID){
    return this.http.patch(`${API}/${ENDPOINT}/${id}`,factura)
  }

  //DELETE
deleteFactura(id:string){
    return this.http.delete(`${API}/${ENDPOINT}/${id}`)
  }
}
