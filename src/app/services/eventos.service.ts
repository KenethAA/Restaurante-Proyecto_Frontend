import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Eventos, EventosWithoutID } from '../models/eventos';
import { environment } from 'src/environments/environment';

const API= environment.urlBackend;
const ENDPOINT = 'eventos';

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  constructor(
    private http: HttpClient
  ) { }
 //GET
  getAllEventos(){
    return this.http.get<Eventos[]>(`${API}/${ENDPOINT}`)
  }

  //POST
  postEventos(eventos:EventosWithoutID){
    return this.http.post(`${API}/${ENDPOINT}`,eventos);
  }

  //PUT
  putEventos(id:string,eventos:EventosWithoutID){
    return this.http.put(`${API}/${ENDPOINT}/${id}`,eventos)
  }

  //PATCH
  patchEventos(id:string,eventos:EventosWithoutID){
    return this.http.patch(`${API}/${ENDPOINT}/${id}`,eventos)
  }

  //DELETE
deleteEventos(id:string){
    return this.http.delete(`${API}/${ENDPOINT}/${id}`)
  }
}
