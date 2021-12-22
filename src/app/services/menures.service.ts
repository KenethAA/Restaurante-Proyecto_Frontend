import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Menures, MenuresWithoutID } from '../models/menures';
import { environment } from 'src/environments/environment';

const API= environment.urlBackend;
const ENDPOINT = 'menus';

@Injectable({
  providedIn: 'root'
})
export class MenuresService {

  constructor(
    private http: HttpClient
  ) { }
 //GET
  getAllMenures(){
    return this.http.get<Menures[]>(`${API}/${ENDPOINT}`)
  }

  //POST
  postMenures(menures:MenuresWithoutID){
    return this.http.post(`${API}/${ENDPOINT}`,menures);
  }

  //PUT
  putMenures(id:string,menures:MenuresWithoutID){
    return this.http.put(`${API}/${ENDPOINT}/${id}`,menures)
  }

  //PATCH
  patchMenures(id:string,menures:MenuresWithoutID){
    return this.http.patch(`${API}/${ENDPOINT}/${id}`,menures)
  }

  //DELETE
deleteMenures(id:string){
    return this.http.delete(`${API}/${ENDPOINT}/${id}`)
  }
}
