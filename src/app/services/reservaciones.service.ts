import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reservaciones, ReservacionesWithoutID } from '../models/reservaciones';
import { environment } from 'src/environments/environment';

const API= environment.urlBackend;
const ENDPOINT = 'reservaciones';

@Injectable({
  providedIn: 'root'
})
export class ReservacionesService {

  constructor(
    private http: HttpClient
  ) { }
 //GET
  getAllReservaciones(){
    return this.http.get<Reservaciones[]>(`${API}/${ENDPOINT}`)
  }

  //POST
  postReservaciones(reservaciones:ReservacionesWithoutID){
    return this.http.post(`${API}/${ENDPOINT}`,reservaciones);
  }

  //PUT
  putReservaciones(id:string,reservaciones:ReservacionesWithoutID){
    return this.http.put(`${API}/${ENDPOINT}/${id}`,reservaciones)
  }

  //PATCH
  patchReservaciones(id:string,reservaciones:ReservacionesWithoutID){
    return this.http.patch(`${API}/${ENDPOINT}/${id}`,reservaciones)
  }

  //DELETE
deleteReservaciones(id:string){
    return this.http.delete(`${API}/${ENDPOINT}/${id}`)
  }
}
