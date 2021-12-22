import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Donaciones, DonacionesWithoutID } from '../models/donaciones';
import { environment } from 'src/environments/environment';

const API= environment.API;
const ENDPOINT = 'donaciones';

@Injectable({
  providedIn: 'root'
})
export class DonacionesService {

  constructor(
    private http: HttpClient
  ) { }
 //GET
  getAllDonaciones(){
    return this.http.get<Donaciones[]>(`${API}/${ENDPOINT}`)
  }

  //POST
  postDonaciones(donaciones:DonacionesWithoutID){
    return this.http.post(`${API}/${ENDPOINT}`,donaciones);
  }

  //PUT
  putDonaciones(id:string,donaciones:DonacionesWithoutID){
    return this.http.put(`${API}/${ENDPOINT}/${id}`,donaciones)
  }

  //PATCH
  patchDonaciones(id:string,donaciones:DonacionesWithoutID){
    return this.http.patch(`${API}/${ENDPOINT}/${id}`,donaciones)
  }

  //DELETE
deleteDonaciones(id:string){
    return this.http.delete(`${API}/${ENDPOINT}/${id}`)
  }
}

