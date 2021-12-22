import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Empleados, EmpleadosWithoutID } from '../models/empleados';
import { environment } from 'src/environments/environment';

const API= environment.API;
const ENDPOINT = 'empleados';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  constructor(
    private http: HttpClient
  ) { }
 //GET
  getAllEmpleados(){
    return this.http.get<Empleados[]>(`${API}/${ENDPOINT}`)
  }

  //POST
  postEmpleados(empleados:EmpleadosWithoutID){
    return this.http.post(`${API}/${ENDPOINT}`,empleados);
  }

  //PUT
  putEmpleados(id:string,empleados:EmpleadosWithoutID){
    return this.http.put(`${API}/${ENDPOINT}/${id}`,empleados)
  }

  //PATCH
  patchEmpleados(id:string,empleados:EmpleadosWithoutID){
    return this.http.patch(`${API}/${ENDPOINT}/${id}`,empleados)
  }

  //DELETE
deleteEmpleados(id:string){
    return this.http.delete(`${API}/${ENDPOINT}/${id}`)
  }
}
