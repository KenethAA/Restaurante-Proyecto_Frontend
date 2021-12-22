import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Colaboradores, ColaboradoresWithoutID } from '../models/colaboradores';
import { environment } from 'src/environments/environment';

const API= environment.API;
const ENDPOINT = 'colaboradores';

@Injectable({
  providedIn: 'root'
})
export class ColaboradoresService {

  constructor(
    private http: HttpClient
  ) { }
 //GET
  getAllColaboradores(){
    return this.http.get<Colaboradores[]>(`${API}/${ENDPOINT}`)
  }

  //POST
  postColaboradores(colaboradores:ColaboradoresWithoutID){
    return this.http.post(`${API}/${ENDPOINT}`,colaboradores);
  }

  //PUT
  putColaboradores(id:string,colaboradores:ColaboradoresWithoutID){
    return this.http.put(`${API}/${ENDPOINT}/${id}`,colaboradores)
  }

  //PATCH
  patchColaboradores(id:string,colaboradores:ColaboradoresWithoutID){
    return this.http.patch(`${API}/${ENDPOINT}/${id}`,colaboradores)
  }

  //DELETE
deleteColaboradores(id:string){
    return this.http.delete(`${API}/${ENDPOINT}/${id}`)
  }
}
