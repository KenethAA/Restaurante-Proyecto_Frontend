import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Franquicias, FranquiciasWithoutID } from '../models/franquicias';
import { environment } from 'src/environments/environment';

const API= environment.API;
const ENDPOINT = 'franquicias';

@Injectable({
  providedIn: 'root'
})
export class FranquiciasService {

  constructor(
    private http: HttpClient
  ) { }
 //GET
  getAllFranquicias(){
    return this.http.get<Franquicias[]>(`${API}/${ENDPOINT}`)
  }

  //POST
  postFranquicias(franquicias:FranquiciasWithoutID){
    return this.http.post(`${API}/${ENDPOINT}`,franquicias);
  }

  //PUT
  putFranquicias(id:string,franquicias:FranquiciasWithoutID){
    return this.http.put(`${API}/${ENDPOINT}/${id}`,franquicias)
  }

  //PATCH
  patchFranquicias(id:string,franquicias:FranquiciasWithoutID){
    return this.http.patch(`${API}/${ENDPOINT}/${id}`,franquicias)
  }

  //DELETE
deleteFranquicias(id:string){
    return this.http.delete(`${API}/${ENDPOINT}/${id}`)
  }
}